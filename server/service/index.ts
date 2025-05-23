import { PrismaClient } from "../generated/prisma";
export interface Dish {
  id: number;
  name: string;
  ingredients: string[];
  diet: "veg" | "non-veg";
  prep_time: number | null; // in minutes
  cook_time: number | null; // in minutes
  flavor_profile: "sweet" | "spicy" | "sour" | "bitter" | "savory";
  course: "appetizer" | "main course" | "dessert" | "snack" | "beverage";
  state: string | null;
  region: string | null;
  image_url?: string | null;
}
const prisma = new PrismaClient();

export const getDishes = async (): Promise<Dish[]> => {
  try {
    const dishes = await prisma.dish.findMany({
      include: {
        ingredients: {
          select: {
            ingredient: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    return dishes.map((dish) => ({
      id: dish.id,
      name: dish.name,
      ingredients: dish.ingredients.map(
        (ingredient) => ingredient.ingredient.name
      ),
      diet: dish.diet as "veg" | "non-veg",
      prep_time: dish.prep_time,
      cook_time: dish.cook_time,
      flavor_profile: dish.flavour_profile as
        | "sweet"
        | "spicy"
        | "sour"
        | "bitter"
        | "savory",
      course: dish.course as
        | "appetizer"
        | "main course"
        | "dessert"
        | "snack"
        | "beverage",
      state: dish.state,
      region: dish.region,
      image_url: dish.image_url,
    }));
  } catch (error) {
    console.error("No Json found");
    return [];
  }
};
export const getIngredients = async (): Promise<string[]> => {
  try {
    const ingredients = await prisma.ingredients.findMany();
    return ingredients.map((ingredient) => ingredient.name);
  } catch (error) {
    console.error("No ingredients found");
    return [];
  }
};
export const getDishById = async (id: number): Promise<Dish | null> => {
  try {
    const dish = await prisma.dish.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        ingredients: {
          select: {
            ingredient: { select: { name: true } },
          },
        },
        diet: true,
        prep_time: true,
        cook_time: true,
        flavour_profile: true,
        course: true,
        state: true,
        region: true,
        image_url: true,
      },
    });
    if (!dish) {
      return null;
    }
    return {
      id: dish.id,
      name: dish.name,
      ingredients: dish.ingredients.map(
        (ingredient) => ingredient.ingredient.name
      ),
      diet: dish.diet as "veg" | "non-veg",
      prep_time: dish.prep_time,
      cook_time: dish.cook_time,
      flavor_profile: dish.flavour_profile as
        | "sweet"
        | "spicy"
        | "sour"
        | "bitter"
        | "savory",
      course: dish.course as
        | "appetizer"
        | "main course"
        | "dessert"
        | "snack"
        | "beverage",
      state: dish.state,
      region: dish.region,
      image_url: dish.image_url,
    };
  } catch (error) {
    console.error("No dish found");
    return null;
  }
};

export const getDishesByIngredients = async (ingredients: string[]) => {
  try {
    const dishes = await prisma.dish.findMany({
      include: {
        ingredients: {
          select: {
            ingredient: {
              select: {
                name: true,
              },
            },
          },
        },
      },
      where: {
        ingredients: {
          none: {
            ingredient: {
              name: {
                notIn: ingredients.map((ingredient) =>
                  ingredient.toLowerCase()
                ),
              },
            },
          },
        },
      },
    });

    return dishes.map((dish) => ({
      name: dish.name,
      id: dish.id,
      image_url: dish.image_url,
      diet: dish.diet as "veg" | "non-veg",
      prep_time: dish.prep_time,
      cook_time: dish.cook_time,
      flavor_profile: dish.flavour_profile as
        | "sweet"
        | "spicy"
        | "sour"
        | "bitter"
        | "savory",
      course: dish.course as
        | "appetizer"
        | "main course"
        | "dessert"
        | "snack"
        | "beverage",
      state: dish.state,
      region: dish.region,
      ingredients: dish.ingredients.map(
        (ingredient) => ingredient.ingredient.name
      ),
    }));
  } catch (error) {
    console.error("Error fetching dishes by ingredients:", error);
  }
};
// const dishes = await getDishesByIngredients([
//   "Rice flour",
//   "coconut",
//   "jaggery",
// ]);
// console.log(dishes);

// console.error("No Json found, seeding...");
// try {
//   let dishes = await csv().fromFile(
//     path.join(__dirname, "indian_food.csv")
//   );

//   dishes = dishes.map((dish, index) => {
//     const dto: Dish = {
//       id: index + 1,
//       name: dish.name,
//       ingredients: dish.ingredients
//         .split(",")
//         .map((ingredient: string) => ingredient.trim().toLowerCase()),
//       diet: dish.diet == "-1" ? null : dish.diet,
//       prep_time: dish.prep_time == "-1" ? null : parseInt(dish.prep_time),
//       cook_time: dish.cook_time == "-1" ? null : parseInt(dish.cook_time),
//       flavor_profile:
//         dish.flavor_profile == "-1" ? null : dish.flavor_profile,
//       course: dish.course == "-1" ? null : dish.course,
//       state: dish.state == "-1" ? null : dish.state,
//       region: dish.region == "-1" ? null : dish.region,
//       image_url: dish.image_url?.trim() == "-1" ? null : dish.image_url,
//     };
//     return dto;

// const images = fs.readFileSync(
//   path.join(__dirname, "images.json"),
//   "utf-8"
// );
// const imageData = JSON.parse(images) as unknown as {
//   [key: string]: string;
// };
// dishes.forEach((dish) => {
//   dish.image_url = imageData[dish.name];
// });
// fs.writeFileSync(
//   path.join(__dirname, "indian_food.json"),
//   JSON.stringify(dishes, null, 2)
// );
// console.log("Seed successful");
// } catch (error) {
//   throw new Error("Seed failed");
// }
//   }
// }

import csv from "csvtojson";
import fs from "fs";
import path from "path";
export interface Dish {
  id: number;
  name: string;
  ingredients: string[];
  diet: "veg" | "non-veg";
  prep_time: number | null; // in minutes
  cook_time: number | null; // in minutes
  flavor_profile: "sweet" | "spicy" | "sour" | "bitter" | "savory";
  course: "appetizer" | "main course" | "dessert" | "snack" | "beverage";
  state: string;
  region: string;
  image_url?: string;
}

export const getDishes = (): Dish[] => {
  try {
    const dishes = fs.readFileSync(
      path.join(__dirname, "indian_food.json"),
      "utf-8"
    );
    const data = JSON.parse(dishes) as unknown as Dish[];
    return data;
  } catch (error) {
    console.error("No Json found");
    return [];
  }
};

export const seed = async () => {
  try {
    fs.readFileSync(path.join(__dirname, "indian_food.json"), "utf-8");
    console.log("Seed found");
  } catch (error) {
    console.error("No Json found, seeding...");
    try {
      let dishes = await csv().fromFile(
        path.join(__dirname, "indian_food.csv")
      );

      dishes = dishes.map((dish, index) => {
        const dto: Dish = {
          id: index + 1,
          name: dish.name,
          ingredients: dish.ingredients
            .split(",")
            .map((ingredient: string) => ingredient.trim().toLowerCase()),
          diet: dish.diet == "-1" ? null : dish.diet,
          prep_time: dish.prep_time == "-1" ? null : parseInt(dish.prep_time),
          cook_time: dish.cook_time == "-1" ? null : parseInt(dish.cook_time),
          flavor_profile:
            dish.flavor_profile == "-1" ? null : dish.flavor_profile,
          course: dish.course == "-1" ? null : dish.course,
          state: dish.state == "-1" ? null : dish.state,
          region: dish.region == "-1" ? null : dish.region,
          image_url: dish.image_url?.trim() == "-1" ? null : dish.image_url,
        };
        return dto;
      });
      const images = fs.readFileSync(
        path.join(__dirname, "images.json"),
        "utf-8"
      );
      const imageData = JSON.parse(images) as unknown as {
        [key: string]: string;
      };
      dishes.forEach((dish) => {
        dish.image_url = imageData[dish.name];
      });
      fs.writeFileSync(
        path.join(__dirname, "indian_food.json"),
        JSON.stringify(dishes, null, 2)
      );
      console.log("Seed successful");
    } catch (error) {
      throw new Error("Seed failed");
    }
  }
};

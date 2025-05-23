import { PrismaClient } from "./generated/prisma";
import fs from "fs";
import path from "path";
import type { Dish } from "./service/index";

const prisma = new PrismaClient();

const seedIngredients = async (ingredients: string[]) => {
  await prisma.ingredients.createMany({
    data: ingredients.map((ingredient) => ({
      name: ingredient,
    })),
  });
};

const seedDishes = async (dishes: Dish[]) => {
  await prisma.dish.createMany({
    data: dishes.map((dish) => ({
      name: dish.name,
      diet: dish.diet,
      prep_time: dish.prep_time,
      cook_time: dish.cook_time,
      flavour_profile: dish.flavor_profile,
      course: dish.course,
      state: dish.state,
      region: dish.region,
      image_url: dish.image_url,
    })),
  });
};

const seedDishIngredients = async (dishes: Dish[]) => {
  dishes.forEach(async (dish) => {
    const dishFromDb = await prisma.dish.findUnique({
      where: {
        name: dish.name,
      },
    });
    dish.ingredients.forEach(async (ingredient) => {
      const ingredientFromDb = await prisma.ingredients.findUnique({
        where: {
          name: ingredient,
        },
      });
      if (dishFromDb && ingredientFromDb) {
        await prisma.dishIngredients.create({
          data: {
            dishId: dishFromDb.id,
            ingredientId: ingredientFromDb.id,
          },
        });
      }
    });
  });
};
export const seed = async () => {
  try {
    const food = JSON.parse(
      fs.readFileSync(
        path.join(__dirname, "./data", "indian_food.json"),
        "utf-8"
      )
    ) as Dish[];
    const ingredientsSet = new Set<string>();
    food.forEach((food) => {
      food.ingredients.forEach((ingredient) => {
        ingredientsSet.add(ingredient.trim().toLowerCase());
      });
    });
    const ingredients = Array.from(ingredientsSet);
    await seedIngredients(ingredients);
    await seedDishes(food);
    await seedDishIngredients(food);
  } catch (error) {
    console.log(error);
  }
};
seed().then(() => {
  console.log("Seeded successfully");
});

import { Dish } from "@/types";

// export const getDishById = (id: string, dishes: Dish[]): Dish | undefined => {
//   return dishes.find((dish) => dish.id == id);
// };

export const getDishSuggestions = (
  ingredients: string[],
  dishes: Dish[]
): Dish[] => {
  const lowerCaseIngredients = ingredients.map((i) => i.toLowerCase());
  return dishes.filter((dish) => {
    const dishIngredients = dish.ingredients.map((i) => i.toLowerCase());
    // Check if at least one ingredient from the dish is in the available ingredients
    return dishIngredients.some((ingredient) =>
      lowerCaseIngredients.includes(ingredient)
    );
  });
};

// export const getAllIngredients = (dishes: Dish[]): string[] => {
//   const ingredientsSet = new Set<string>();

//   dishes.forEach((dish) => {
//     dish.ingredients.forEach((ingredient) => {
//       ingredientsSet.add(ingredient);
//     });
//   });

//   return Array.from(ingredientsSet).sort();
// };

// export const getAllStates = (dishes: Dish[]): string[] => {
//   const statesSet = new Set<string>();
//   dishes.forEach((dish) => {
//     if (dish.state) {
//       statesSet.add(dish.state);
//     }
//   });

//   return Array.from(statesSet).sort();
// };

// export const getAllRegions = (dishes: Dish[]): string[] => {
//   const regionsSet = new Set<string>();
//   dishes.forEach((dish) => {
//     if (dish.region) {
//       regionsSet.add(dish.region);
//     }
//   });

//   return Array.from(regionsSet).sort();
// };

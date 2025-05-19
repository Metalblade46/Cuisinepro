import DishSuggester from "@/components/DishSuggester";
import { getAllDishes, getDishIngredients } from "@/data/dishes";

export default async function Suggester() {
  const dishes = await getAllDishes();
  const allIngredients = await getDishIngredients();
  return <DishSuggester allIngredients={allIngredients} dishes={dishes} />;
}

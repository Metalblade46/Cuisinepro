import DishSuggester from "@/components/DishSuggester";
import { getDishIngredients } from "@/data/dishes";
export default async function Suggester() {
  const allIngredients = await getDishIngredients();
  return <DishSuggester allIngredients={allIngredients} />;
}

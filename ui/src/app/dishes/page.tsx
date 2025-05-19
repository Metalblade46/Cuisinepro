import DishesList from "@/components/DishesList";
import { getAllDishes, getDishStates, getDishRegions } from "@/data/dishes";

export default async function Dishes() {
  const dishes = await getAllDishes();
  const states = await getDishStates();
  const regions = await getDishRegions();

  return <DishesList dishes={dishes} states={states} regions={regions} />;
}

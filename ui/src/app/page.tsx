import HomePage from "@/components/HomePage";
import { getAllDishes } from "@/data/dishes";

export default async function Home() {
  const dishes = await getAllDishes();
  return <HomePage dishes={dishes} />;
}

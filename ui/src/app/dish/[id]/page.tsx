import DishDetails from "@/components/DishDetails";
import { getDishById } from "@/data/dishes";

export default async function DishPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const dish = await getDishById(Number(id));

  return <DishDetails dish={dish} />;
}

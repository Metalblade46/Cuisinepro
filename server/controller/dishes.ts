import { Router } from "express";
import {
  getDishById,
  getDishesByIngredients,
  getDishes,
  getIngredients,
} from "../service";
import type { Dish } from "../service/index";

const dishesRouter = Router();

dishesRouter.get("/", async (req, res) => {
  const dishes = await getDishes();
  res.send(dishes);
});
dishesRouter.get("/ingredients", async (req, res) => {
  const ingredients = await getIngredients();
  res.send(ingredients.sort());
});
dishesRouter.get("/states", async (req, res) => {
  const dishes = await getDishes();
  const statesSet = new Set<string>();
  dishes.forEach((dish: Dish) => {
    if (dish.state) {
      statesSet.add(dish.state);
    }
  });
  res.send(Array.from(statesSet).sort());
});
dishesRouter.get("/regions", async (req, res) => {
  const dishes = await getDishes();
  const regionsSet = new Set<string>();
  dishes.forEach((dish: Dish) => {
    if (dish.region) {
      regionsSet.add(dish.region);
    }
  });
  res.send(Array.from(regionsSet).sort());
});
dishesRouter.get("/search", async (req, res) => {
  const { ingredients } = req.query;
  if (!ingredients) {
    res.status(400).json({ error: "No ingredients provided" });
    return;
  }
  const parsedIngredients = (ingredients as string)
    .split(",")
    .map((ingredient) => ingredient.trim());
  if (parsedIngredients.length === 0) {
    res.status(400).json({ error: "No ingredients provided" });
    return;
  }
  if (!Array.isArray(parsedIngredients)) {
    res.status(400).json({ error: "Invalid ingredients" });
    return;
  }
  const dishes = await getDishesByIngredients(parsedIngredients);
  res.send(dishes);
});
dishesRouter.get("/:id", async (req, res) => {
  if (isNaN(Number(req.params.id))) {
    res.status(400).json({ error: "Invalid dish id" });
    return;
  }
  const dish = await getDishById(Number(req.params.id));
  if (!dish) {
    res.status(404).json({ error: "Dish not found" });
    return;
  }
  res.send(dish);
});

export default dishesRouter;

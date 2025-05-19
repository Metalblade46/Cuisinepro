import { Router } from "express";
import { getDishes } from "../data";

const dishesRouter = Router();
const dishes = getDishes();
dishesRouter.get("/", (req, res) => {
  res.send(dishes);
});
dishesRouter.get("/ingredients", (req, res) => {
  const ingredientsSet = new Set<string>();

  dishes.forEach((dish) => {
    dish.ingredients.forEach((ingredient) => {
      ingredientsSet.add(ingredient);
    });
  });
  res.send(Array.from(ingredientsSet).sort());
});
dishesRouter.get("/states", (req, res) => {
  const statesSet = new Set<string>();
  dishes.forEach((dish) => {
    if (dish.state) {
      statesSet.add(dish.state);
    }
  });
  res.send(Array.from(statesSet).sort());
});
dishesRouter.get("/regions", (req, res) => {
  const regionsSet = new Set<string>();
  dishes.forEach((dish) => {
    if (dish.region) {
      regionsSet.add(dish.region);
    }
  });
  res.send(Array.from(regionsSet).sort());
});
dishesRouter.get("/:id", (req, res) => {
  if (isNaN(Number(req.params.id))) {
    res.status(400).json({ error: "Invalid dish id" });
    return;
  }
  const dish = dishes.find((dish) => dish.id === Number(req.params.id));
  if (!dish) {
    res.status(404).send("Dish not found");
  }
  res.send(dish);
});

export default dishesRouter;

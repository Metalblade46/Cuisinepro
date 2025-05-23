import express, { type Request, type Response } from "express";
import cors from "cors";
import { getDishes } from "./service";
import dishesRouter from "./controller/dishes";
function main() {
  const app = express();

  app.use(cors());

  app.get("/", (req: Request, res: Response) => {
    res.send("Hello");
  });

  app.use("/dishes", dishesRouter);

  app.listen(3001, () => {
    console.log("Server is running on port 3001");
  });
}

main();

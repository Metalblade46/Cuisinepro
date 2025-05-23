/*
  Warnings:

  - You are about to drop the `_DishToIngredients` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_DishToIngredients" DROP CONSTRAINT "_DishToIngredients_A_fkey";

-- DropForeignKey
ALTER TABLE "_DishToIngredients" DROP CONSTRAINT "_DishToIngredients_B_fkey";

-- DropTable
DROP TABLE "_DishToIngredients";

-- CreateTable
CREATE TABLE "DishIngredients" (
    "dishId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,

    CONSTRAINT "DishIngredients_pkey" PRIMARY KEY ("dishId","ingredientId")
);

-- AddForeignKey
ALTER TABLE "DishIngredients" ADD CONSTRAINT "DishIngredients_dishId_fkey" FOREIGN KEY ("dishId") REFERENCES "Dish"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DishIngredients" ADD CONSTRAINT "DishIngredients_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

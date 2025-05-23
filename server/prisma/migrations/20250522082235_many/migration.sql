/*
  Warnings:

  - You are about to drop the `IngredientsOfDish` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "IngredientsOfDish" DROP CONSTRAINT "IngredientsOfDish_dish_id_fkey";

-- DropForeignKey
ALTER TABLE "IngredientsOfDish" DROP CONSTRAINT "IngredientsOfDish_ingredient_id_fkey";

-- DropTable
DROP TABLE "IngredientsOfDish";

-- CreateTable
CREATE TABLE "_DishToIngredients" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_DishToIngredients_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_DishToIngredients_B_index" ON "_DishToIngredients"("B");

-- AddForeignKey
ALTER TABLE "_DishToIngredients" ADD CONSTRAINT "_DishToIngredients_A_fkey" FOREIGN KEY ("A") REFERENCES "Dish"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DishToIngredients" ADD CONSTRAINT "_DishToIngredients_B_fkey" FOREIGN KEY ("B") REFERENCES "Ingredients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

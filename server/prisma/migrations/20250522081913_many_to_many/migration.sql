/*
  Warnings:

  - You are about to drop the column `dishId` on the `Ingredients` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ingredients" DROP CONSTRAINT "Ingredients_dishId_fkey";

-- AlterTable
ALTER TABLE "Ingredients" DROP COLUMN "dishId";

-- CreateTable
CREATE TABLE "IngredientsOfDish" (
    "id" SERIAL NOT NULL,
    "dish_id" INTEGER NOT NULL,
    "ingredient_id" INTEGER NOT NULL,

    CONSTRAINT "IngredientsOfDish_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "IngredientsOfDish" ADD CONSTRAINT "IngredientsOfDish_dish_id_fkey" FOREIGN KEY ("dish_id") REFERENCES "Dish"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IngredientsOfDish" ADD CONSTRAINT "IngredientsOfDish_ingredient_id_fkey" FOREIGN KEY ("ingredient_id") REFERENCES "Ingredients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - Made the column `dishId` on table `Ingredients` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Ingredients" DROP CONSTRAINT "Ingredients_dishId_fkey";

-- AlterTable
ALTER TABLE "Dish" ALTER COLUMN "prep_time" DROP NOT NULL,
ALTER COLUMN "cook_time" DROP NOT NULL,
ALTER COLUMN "image_url" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Ingredients" ALTER COLUMN "dishId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Ingredients" ADD CONSTRAINT "Ingredients_dishId_fkey" FOREIGN KEY ("dishId") REFERENCES "Dish"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `coupon` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `point` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "coupon",
DROP COLUMN "point",
ADD COLUMN     "userCoupon" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "userPoint" INTEGER NOT NULL DEFAULT 0;

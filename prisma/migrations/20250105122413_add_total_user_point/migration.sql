/*
  Warnings:

  - Added the required column `total` to the `UserPoint` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserPoint" ADD COLUMN     "total" INTEGER NOT NULL;

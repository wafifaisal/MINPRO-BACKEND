-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "coupon" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "point" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "avatar" SET DEFAULT 'https://res.cloudinary.com/dkyco4yqp/image/upload/v1735131879/HYPETIX-removebg-preview_qxyuj5.png';

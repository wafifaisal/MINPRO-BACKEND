-- CreateEnum
CREATE TYPE "EventCategory" AS ENUM ('Concert', 'Sports', 'Theater', 'Socials', 'Other');

-- CreateEnum
CREATE TYPE "Location" AS ENUM ('Bandung', 'Jakarta', 'Bali', 'Surabaya');

-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('Paid', 'Free');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('pending', 'success', 'cancelled');

-- CreateEnum
CREATE TYPE "RatingRange" AS ENUM ('1', '2', '3', '4', '5');

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "event_name" TEXT,
    "description" TEXT,
    "start_time" TIME,
    "end_time" TIME,
    "event_date" DATE,
    "location" "Location" NOT NULL,
    "venue" TEXT,
    "event_type" "EventType" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "event_thumbnail" TEXT,
    "event_preview" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "coupon_seat" INTEGER,
    "category" "EventCategory" NOT NULL,
    "organizerId" TEXT,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "category" TEXT,
    "desc" TEXT,
    "seats" INTEGER,
    "price" INTEGER NOT NULL DEFAULT 0,
    "eventId" TEXT,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organizer" (
    "id" TEXT NOT NULL,
    "organizer_name" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT,
    "avatar" TEXT DEFAULT 'https://res.cloudinary.com/dkyco4yqp/image/upload/v1735131879/HYPETIX-removebg-preview_qxyuj5.png',
    "isVerify" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Organizer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rating" (
    "id" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "eventId" TEXT,
    "userId" TEXT,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT,
    "isVerify" BOOLEAN NOT NULL DEFAULT false,
    "ref_code" TEXT NOT NULL,
    "ref_by" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCoupon" (
    "id" SERIAL NOT NULL,
    "isRedeem" BOOLEAN NOT NULL DEFAULT false,
    "percentage" INTEGER NOT NULL DEFAULT 10,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiredAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "UserCoupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPoint" (
    "id" SERIAL NOT NULL,
    "isRedeem" BOOLEAN NOT NULL DEFAULT false,
    "point" INTEGER NOT NULL DEFAULT 10000,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiredAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "UserPoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "total_price" INTEGER NOT NULL,
    "final_price" INTEGER NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiredAt" TIMESTAMP(3) NOT NULL,
    "redirect_url" TEXT,
    "userId" TEXT,
    "eventId" TEXT,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order_Details" (
    "quantity" INTEGER NOT NULL,
    "subtotal" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,
    "ticketId" INTEGER NOT NULL,

    CONSTRAINT "Order_Details_pkey" PRIMARY KEY ("orderId","ticketId")
);

-- CreateTable
CREATE TABLE "Review" (
    "userId" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "rating" "RatingRange" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("userId","eventId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Event_event_name_key" ON "Event"("event_name");

-- CreateIndex
CREATE UNIQUE INDEX "Organizer_organizer_name_key" ON "Organizer"("organizer_name");

-- CreateIndex
CREATE UNIQUE INDEX "Organizer_email_key" ON "Organizer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "Organizer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCoupon" ADD CONSTRAINT "UserCoupon_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPoint" ADD CONSTRAINT "UserPoint_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order_Details" ADD CONSTRAINT "Order_Details_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order_Details" ADD CONSTRAINT "Order_Details_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

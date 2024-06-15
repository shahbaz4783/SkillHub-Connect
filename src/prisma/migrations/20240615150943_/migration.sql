/*
  Warnings:

  - Added the required column `connectCost` to the `JobPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JobPost" ADD COLUMN     "connectCost" INTEGER NOT NULL,
ADD COLUMN     "isPublic" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "category" DROP DEFAULT;

-- AlterTable
ALTER TABLE "ServicePost" ADD COLUMN     "isPublic" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "connects" INTEGER DEFAULT 120;

-- CreateTable
CREATE TABLE "Rating" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "servicePostId" TEXT NOT NULL,
    "ratingValue" INTEGER NOT NULL,
    "comment" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Proposal" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "jobPostId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "bid" DECIMAL(65,30) NOT NULL,
    "fees" DECIMAL(65,30) NOT NULL,
    "paymentReceive" DECIMAL(65,30) NOT NULL,
    "timeframe" TEXT NOT NULL,
    "isAccepted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Proposal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Rating_userId_servicePostId_key" ON "Rating"("userId", "servicePostId");

-- CreateIndex
CREATE UNIQUE INDEX "Proposal_userId_jobPostId_key" ON "Proposal"("userId", "jobPostId");

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_servicePostId_fkey" FOREIGN KEY ("servicePostId") REFERENCES "ServicePost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_jobPostId_fkey" FOREIGN KEY ("jobPostId") REFERENCES "JobPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - Added the required column `userId` to the `JobPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `ServicePost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JobPost" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ServicePost" ADD COLUMN     "userId" TEXT NOT NULL;

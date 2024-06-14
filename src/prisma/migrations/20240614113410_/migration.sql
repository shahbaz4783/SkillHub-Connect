/*
  Warnings:

  - Added the required column `imageUrl` to the `ServicePost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ServicePost" ADD COLUMN     "imageUrl" TEXT NOT NULL,
ALTER COLUMN "category" DROP DEFAULT;

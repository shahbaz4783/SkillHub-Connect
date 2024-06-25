/*
  Warnings:

  - You are about to drop the column `isPublic` on the `JobPost` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `JobPost` table. All the data in the column will be lost.
  - Added the required column `projectType` to the `JobPost` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('OPEN', 'CLOSED', 'IN_PROGRESS');

-- CreateEnum
CREATE TYPE "ServiceStatus" AS ENUM ('OPEN', 'PAUSED');

-- AlterTable
ALTER TABLE "JobPost" DROP COLUMN "isPublic",
DROP COLUMN "location",
ADD COLUMN     "projectType" TEXT NOT NULL,
ADD COLUMN     "status" "JobStatus" NOT NULL DEFAULT 'OPEN';

-- AlterTable
ALTER TABLE "ServicePost" ADD COLUMN     "status" "ServiceStatus" NOT NULL DEFAULT 'OPEN';

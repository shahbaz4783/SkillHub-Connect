-- CreateTable
CREATE TABLE "VerificationOTP" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "otp" INTEGER NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationOTP_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VerificationOTP_otp_key" ON "VerificationOTP"("otp");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationOTP_email_otp_key" ON "VerificationOTP"("email", "otp");

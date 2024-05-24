import generateVerificationEmail from '@/mails/generate-verification-email';
import loginOTPMail from '@/mails/login-otp-mail';
import resetPasswordEmail from '@/mails/reset-password-mail';
import nodemailer from 'nodemailer';

const email = process.env.EMAIL;
const password = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  tls: {
    ciphers: 'SSLv3',
  },
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: password,
  },
});

export const sendVerificationMail = async (
  token: string,
  email: string,
  name: string,
) => {
  let confirmLink;

  if (process.env.NODE_ENV === 'development') {
    confirmLink = `http://localhost:3000/new-verification?token=${token}`;
  } else {
    confirmLink = `https://skillhub-connect.vercel.app/new-verification?token=${token}`;
  }

  await transporter.sendMail({
    to: email,
    from: process.env.EMAIL,
    subject: 'Skillhub Connect Email Verification',
    html: generateVerificationEmail(name, confirmLink),
  });
};

export const sendResetPasswordMail = async (
  token: string,
  email: string,
  name: string,
) => {
  let confirmLink;

  if (process.env.NODE_ENV === 'development') {
    confirmLink = `http://localhost:3000/new-password?token=${token}`;
  } else {
    confirmLink = `https://skillhub-connect.vercel.app/new-password?token=${token}`;
  }

  await transporter.sendMail({
    to: email,
    from: process.env.EMAIL,
    subject: 'Reset your password',
    html: resetPasswordEmail(name, confirmLink),
  });
};

export const sendOTPforLogin = async (
  otp: number,
  email: string,
  name: string,
) => {
  await transporter.sendMail({
    to: email,
    from: process.env.EMAIL,
    subject: 'OTP to Login Skillhub connect ',
    html: loginOTPMail(name, otp),
  });
};

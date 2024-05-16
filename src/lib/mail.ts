import nodemailer from 'nodemailer';

const email = process.env.EMAIL;
const password = process.env.EMAIL_PASS;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    tls: {
      ciphers: 'SSLv3',
    },
    port: 587,
    secure: false,
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
      subject: 'Please confirm your email',
      html: `
		<h2>ACTIVATE YOUR ACCOUNT TODAY</h2>

		<p>Dear ${name}</p>
		<p>Please Click on the button to activate your acount</p>

		<a href=${confirmLink}>
		<button>Click Here</button>
		</a>
		`,
    });
  };

  const sendMail = async (transporter: any, sendVerificationMail: any) => {
    try {
      transporter.sendMail(sendVerificationMail);
    } catch (error) {
      console.log(error);
    }
  };

  sendMail(transporter, sendMail);
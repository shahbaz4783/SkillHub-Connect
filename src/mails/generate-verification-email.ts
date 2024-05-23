const generateVerificationEmail = (name: string, verificationLink: string) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            padding: 10px 0;
          }
          .header img {
            max-width: 100px;
          }
          .content {
            padding: 20px;
            text-align: left;
          }
          .content h1 {
            color: #333333;
          }
          .content p {
            color: #666666;
            line-height: 1.5;
          }
          .button-container {
            text-align: center;
            margin-top: 20px;
          }
          .button-container a {
            background-color: #007BFF;
            color: #ffffff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
          }
          .footer {
            text-align: center;
            padding: 20px;
            color: #999999;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <img src="/public/ibm.svg" alt="Your Logo">
          </div>
          <div class="content">
            <h1>Email Verification</h1>
            <p>Hello ${name},</p>
            <p>Thank you for registering with us. Please click the button below to verify your email address:</p>
            <p>This link will be valid only for 60 minutes.</p>
            <div class="button-container">
              <a href="${verificationLink}">Verify Email</a>
            </div>
            <p>If you did not sign up for this account, you can ignore this email.</p>
          </div>
          <div class="footer">
            &copy; ${new Date().getFullYear()} Skillhub Connect. All rights reserved.
          </div>
        </div>
      </body>
    </html>
  `;
};

export default generateVerificationEmail;

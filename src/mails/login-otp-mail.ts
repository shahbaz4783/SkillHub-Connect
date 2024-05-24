const loginOTPMail = (name: string, otp: number) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login OTP</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
        }
        .content p {
            font-size: 16px;
            color: #333333;
        }
        .otp {
            display: inline-block;
            background-color: #007bff;
            color: #ffffff;
            padding: 10px 20px;
            border-radius: 4px;
            text-align: center;
            font-size: 24px;
            letter-spacing: 2px;
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            padding: 10px 0;
            font-size: 14px;
            color: #777777;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="logo.png" alt="Company Logo">
        </div>
        <div class="content">
            <p>Dear ${name},</p>
            <p>Your One-Time Password (OTP) for login is:</p>
            <div class="otp">${otp}</div>
            <p>This OTP is valid for the next 10 minutes. Please do not share this code with anyone.</p>
            <p>If you did not request this code, please secure your account immediately by changing your password and contact our support team.</p>
        </div>
        <div class="footer">
            &copy; ${new Date().getFullYear()} Skillhub Connect. All rights reserved.
        </div>
    </div>
</body>
</html>

  `;
};

export default loginOTPMail;

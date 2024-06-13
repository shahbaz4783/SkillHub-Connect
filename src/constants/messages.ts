export const authMessages = {
  validation: {
    invalidFields:
      'Please ensure all fields are filled out correctly and try again.',
    passwordMismatch:
      'Passwords do not match. Please double-check and try again.',
    invalidEmail: 'Invalid email format. Please enter a valid email address.',
  },

  success: {
    resetEmailSent: 'A reset email has been sent. Please check your inbox.',
    confirmationEmailSent:
      'A confirmation email has been sent! Please check your inbox.',
    otpSent:
      'An OTP has been sent to your email. Please check your email and enter the OTP.',
    loginSuccess: 'You have successfully logged in!',
    passwordUpdated: 'Your password has been updated successfully.',
    emailVerified: 'Your email has been verified successfully.',
    profileUpdate: 'Your profile has been updated successfully.',
  },

  error: {
    tokenNotFound: 'Token not found. Please request a new one.',
    invalidToken: 'The token is invalid. Please request a new one.',
    tokenExpired: 'The token has expired. Please request a new one.',
    invalidOTP: 'Invalid OTP. Please try again.',
    otpExpired: 'The OTP has expired. Please request a new one.',
    invalidCredentials: 'The email or password is incorrect. Please try again.',
    somethingWentWrong: 'An unexpected error occurred. Please try again later.',
    emailAlreadyUsed:
      'The email address is already associated with an account. Please use a different email.',
    usernameAlreadyUsed:
      'The username is already associated with an account. Please use a different username.',
    emailNotRegistered:
      'The email address is not registered. Please sign up first.',
    userNotFound:
      'No account found with the provided email. Please check and try again.',
    noChangeInUsername: 'No changes detected in the username.',
  },
};

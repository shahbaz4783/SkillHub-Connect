import AuthHeader from '../ui/AuthHeader';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const ForgotPassowordByEmail = () => {
  return (
    <>
      <AuthHeader
        heading="Forgot Password"
        subHeading="Enter your email to reset your password"
        label=""
        linkTo=""
      />
      <Input type="email" placeholder="Enter your email address" />
      <Button>Send Verification Link</Button>
    </>
  );
};

export default ForgotPassowordByEmail;

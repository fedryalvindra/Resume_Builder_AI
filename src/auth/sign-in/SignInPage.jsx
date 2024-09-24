import { SignIn } from "@clerk/clerk-react";

function SignInPage() {
  return (
    <div className="my-20 flex items-center justify-center">
      <SignIn />
    </div>
  );
}

export default SignInPage;

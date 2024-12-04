// app/(auth)/organization/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from "@clerk/nextjs";

export default function OrganizationSignInPage() {
  return (
    <SignIn 
      path="/organization/sign-in"
      routing="path"
      signUpUrl="/organization/sign-up"
      afterSignUpUrl="/organization/dashboard"
    />
  );
}

// app/(auth)/donator/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from "@clerk/nextjs";

export default function DonatorSignInPage() {
  return (
    <SignIn 
      path="/donator/sign-in"
      routing="path"
      signUpUrl="/donator/sign-up"
      afterSignInUrl="/donator/dashboard"
    />
  );
}

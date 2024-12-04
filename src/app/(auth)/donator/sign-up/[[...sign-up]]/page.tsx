// app/(auth)/donator/sign-up/[[...sign-up]]/page.tsx
import { SignUp } from "@clerk/nextjs";

export default function DonatorSignUpPage() {
  return (
    <SignUp 
      path="/donator/sign-up"
      routing="path"
      signInUrl="/donator/sign-in"
      afterSignUpUrl="/donator/dashboard"
      appearance={{
        elements: {
          formButtonPrimary: "bg-green-500 hover:bg-green-600",
          // Add custom styles as needed
        }
      }}
    />
  );
}

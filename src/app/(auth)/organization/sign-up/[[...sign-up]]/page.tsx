// app/(auth)/organization/sign-up/[[...sign-up]]/page.tsx
import { SignUp } from "@clerk/nextjs";

export default function OrganizationSignUpPage() {
  return (
    <SignUp 
      path="/organization/sign-up"
      routing="path"
      signInUrl="/organization/sign-in"
      afterSignUpUrl="/organization/dashboard"
      appearance={{
        elements: {
          formButtonPrimary: "bg-blue-500 hover:bg-blue-600",
          // Add custom styles as needed
        }
      }}
    />
  );
}

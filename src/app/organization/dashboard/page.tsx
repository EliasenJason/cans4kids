// app/organization/dashboard/page.tsx
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {

  const user = await currentUser();
  // const { userId, sessionClaims } = auth();
  console.log(user?.id)
  if (!user) {
    redirect("/organization/sign-in");
  }

  // // Check user type from metadata
  // const userType = sessionClaims?.metadata?.userType;
  // if (userType !== "organization") {
  //   redirect("/");
  // }
  // console.log('hello')
  // console.log(auth())kk
  return (
    <div>
      <h1>Organization Dashboard</h1>
      <p>hello, {user?.firstName}</p>
      {/* Your dashboard content */}
    </div>
  );
}

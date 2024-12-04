// app/page.tsx
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold">Welcome to Cans for Kids</h1>
        
        {!userId ? (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center">
              <h2 className="text-2xl mb-2">For Organizations</h2>
              <div className="space-x-4">
                <Link 
                  href="/organization/sign-in"
                  className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                >
                  Sign In
                </Link>
                <Link 
                  href="/organization/sign-up"
                  className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                >
                  Sign Up
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-2xl mb-2">For Donators</h2>
              <div className="space-x-4">
                <Link 
                  href="/donator/sign-in"
                  className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                >
                  Sign In
                </Link>
                <Link 
                  href="/donator/sign-up"
                  className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <Link 
            href="/dashboard"
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            Go to Dashboard
          </Link>
        )}
      </div>
    </main>
  );
}

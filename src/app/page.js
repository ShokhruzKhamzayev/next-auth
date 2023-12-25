import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth()
  const isAuth = !!userId
  return (
    <div className="container mx-auto flex justify-between items-center mt-5">
      <h1 className="text-md md:text-3xl">Clerk Auth Example</h1>
      {
        !isAuth ? (
          <div className="flex gap-3">
            <Link className="text-sm px-3 py-2 border border-neutral-500 md:px-5 md:py-2 rounded-md" href={'/sign-in'}>Sign In</Link>
            <Link className="text-sm px-3 py-2 border-neutral-500 border md:px-5 md:py-2 rounded-md" href={'/sign-up'}>Sign Up</Link>
          </div>
        ) : (
          <UserButton afterSignOutUrl="/" />
        )
      }
    </div>
  )
}

"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import ProgressBar from "./progressbar";

export default function TopNav() {

    return (
        <header className="fixed w-full">
            <nav className="flex items-center justify-between p-4 bg-[#2e026d]  text-white">
                <Link href="/">
                    File<span className="text-[hsl(280,100%,70%)] font-bold">Drop</span>
                </Link>

                <div className="flex gap-4">
                    <SignedIn>
                        <Link href="/dashboard">
                            <Button variant="ghost">Go to dashboard</Button>
                        </Link>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button variant="secondary">Sign In</Button>
                        </SignInButton>
                    </SignedOut>
                </div>
            </nav>
            <ProgressBar />
        </header>
    );
}

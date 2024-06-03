import "~/styles/globals.css";

import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { GeistSans } from "geist/font/sans";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export const metadata = {
  title: "FileDrop",
  description: "A simple file sharing service.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

// TODO: Fix basic layout + title
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en" className={`${GeistSans.variable}`}>
                <body>
                    <div className="grid h-screen grid-rows-[auto,1fr]">
                        <nav className="flex items-center justify-between p-4 bg-[#2e026d]  text-white">
                            <Link href="/">
                                File<span className="text-[hsl(280,100%,70%)] font-bold">Drop</span>
                            </Link>

                            <div className="flex gap-4">
                                <SignedIn>
                                    <UserButton />
                                </SignedIn>
                                <SignedOut>
                                    <SignInButton mode="modal">
                                        <Button variant="secondary">Sign In</Button>
                                    </SignInButton>
                                </SignedOut>
                            </div>
                        </nav>
                        <main className="overflow-y-scroll">{children}</main>
                    </div>
                </body>
            </html>
        </ClerkProvider>
    );
}

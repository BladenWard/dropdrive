import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import { GeistSans } from "geist/font/sans";
import TopNav from "./_components/topnav";

export const metadata = {
  title: "FileDrop",
  description: "A simple file sharing service.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en" className={`${GeistSans.variable}`}>
                <body className="min-h-screen bg-[#15162c]">
                    <div className="grid h-auto grid-rows-[auto,1fr]">
                        <TopNav />
                        <main className="pt-14 overflow-y-scroll">{children}</main>
                    </div>
                </body>
            </html>
        </ClerkProvider>
    );
}

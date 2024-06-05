import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function HomePage() {
    return (
        <div className="flex min-h-full flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                    File<span className="text-[hsl(280,100%,70%)]">Drop</span>
                </h1>
                <div className="flex">
                    <Link href="/dashboard">
                        <Button variant="secondary">Go to dashboard</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

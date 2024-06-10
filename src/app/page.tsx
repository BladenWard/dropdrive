import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function HomePage() {
    return (
        <div className="flex min-h-full flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            <div className="container gap-12 px-16 py-12 flex items-center justify-between">
                <h1 className="font-bold text-white sm:text-[5rem]">
                    Your<span className="text-[hsl(280,100%,70%)]"> Files</span>
                </h1>
                <div className="flex">
                    <Link href="/dashboard">
                        <Button variant="secondary">Upload File</Button>
                    </Link>
                </div>
            </div>
            <div className="container gap-12 px-16 py-12 flex items-center justify-between">
                <h1 className="font-bold text-white sm:text-[5rem]">
                    Your<span className="text-[hsl(280,100%,70%)]"> Files</span>
                </h1>
                <div className="flex">
                    <Link href="/dashboard">
                        <Button variant="secondary">Upload File</Button>
                    </Link>
                </div>
            </div>
            <div className="container gap-12 px-16 py-12 flex items-center justify-between">
                <h1 className="font-bold text-white sm:text-[5rem]">
                    Your<span className="text-[hsl(280,100%,70%)]"> Files</span>
                </h1>
                <div className="flex">
                    <Link href="/dashboard">
                        <Button variant="secondary">Upload File</Button>
                    </Link>
                </div>
            </div>
            <div className="container gap-12 px-16 py-12 flex items-center justify-between">
                <h1 className="font-bold text-white sm:text-[5rem]">
                    Your<span className="text-[hsl(280,100%,70%)]"> Files</span>
                </h1>
                <div className="flex">
                    <Link href="/dashboard">
                        <Button variant="secondary">Upload File</Button>
                    </Link>
                </div>
            </div>
            <div className="container gap-12 px-16 py-12 flex items-center justify-between">
                <h1 className="font-bold text-white sm:text-[5rem]">
                    Your<span className="text-[hsl(280,100%,70%)]"> Files</span>
                </h1>
                <div className="flex">
                    <Link href="/dashboard">
                        <Button variant="secondary">Upload File</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

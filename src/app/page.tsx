import Link from "next/link";
import { Button } from "~/components/ui/button";
import { getFiles } from "~/server/queries";

async function Files() {
    const files = await getFiles();

    // TODO: Make modal to add file to db
    return (
        <div className="container px-16 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {files.map((file) => (
                    <div
                        key={file.id}
                        className="p-4 bg-[#15162c] rounded-lg shadow-md"
                    >
                        <h2 className="text-lg font-bold">{file.name}</h2>
                        <p className="text-sm text-gray-400">{file.size}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function HomePage() {
    return (
        <div className="flex min-h-full flex-col bg-gradient-to-b from-[#15162c] via-[#2e026d] to-[#15162c] text-white">
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
            <Files />
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
            <Files />
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
            <Files />
        </div>
    );
}

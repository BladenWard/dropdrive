import { auth } from "@clerk/nextjs/server";
import { db } from "./db";

export async function getFiles() {
    const user = auth();

    if (!user.userId) throw new Error("Unauthorized");

    const files = await db.query.files.findMany({
        // where: (model, { eq }) => eq(model.userId, user.userId),
        // orderBy: (model, { desc }) => desc(model.id),
    });

    return files;
}

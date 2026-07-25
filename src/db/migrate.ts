import { db } from "./index";
import { migrate } from "drizzle-orm/neon-http/migrator";

async function main(){
    try {
        console.log("running migrations...")
        await migrate(db, { migrationsFolder: "./src/db/migrations" })
        console.log("migrations completed successfully")
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

main()
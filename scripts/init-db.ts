import fs from "fs";
import path from "path";
import { db } from "../src/db";
import { runSeed } from "../src/db/seed";
import { sql } from "drizzle-orm";
async function main(){console.log('⚡ [JALCHAKRA] Initializing Database...');const migrationFile=path.join(process.cwd(),'drizzle','0000_silly_loa.sql');if(fs.existsSync(migrationFile)){const raw=fs.readFileSync(migrationFile,'utf8');for(const stmt of raw.split('--> statement-breakpoint')){if(stmt.trim())try{await db.execute(sql.raw(stmt.trim()))}catch{}}}try{const check=await db.execute(sql`SELECT count(*) as count FROM villages`);const count=Number((check as any).rows?.[0]?.count??0);if(count===0)console.log('🌱 Seeding demo data...',await runSeed(false));else console.log(`ℹ️ Database already contains ${count} villages.`)}catch{console.log('🌱 Seeding initial data...',await runSeed(false))}console.log('🎉 Database is ready to use!');process.exit(0)}main().catch(e=>{console.error('❌ Database initialization error:',e);process.exit(1)});

// import postgres from "postgres";
import "dotenv/config"; //process.env
import { neon } from "@neondatabase/serverless";
export const sql = neon(process.env.DATABASE_URL);

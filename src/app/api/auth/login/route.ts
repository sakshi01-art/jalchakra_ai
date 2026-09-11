import { NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
export async function POST(req:Request){try{const{email,password}=await req.json();if(!email||!password)return NextResponse.json({error:'Email and password required'},{status:400});const[u]=await db.select().from(users).where(eq(users.email,email));if(!u)return NextResponse.json({error:'Invalid credentials'},{status:401});if(!(await bcrypt.compare(password,u.password_hash)))return NextResponse.json({error:'Invalid credentials'},{status:401});await db.update(users).set({last_login:new Date()}).where(eq(users.user_id,u.user_id));return NextResponse.json({success:true,user:{user_id:u.user_id,name:u.name,email:u.email,role:u.role,village_id:u.village_id}});}catch(e){return NextResponse.json({error:String(e)},{status:500});}}

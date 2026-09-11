import { NextResponse } from "next/server";
import { runSeed } from "@/db/seed";
export async function POST(){try{const counts=await runSeed(true);return NextResponse.json({success:true,message:'Demo data seeded successfully',counts});}catch(e){return NextResponse.json({success:false,error:String(e)},{status:500});}}

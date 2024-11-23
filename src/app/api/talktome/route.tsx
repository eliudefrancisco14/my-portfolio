import connectDB from "@/lib/mongodb";
import TalkToMe from "@/models/TalkToMe";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

interface RequestBody {
  fullname: string;
  email: string;
  message: string;
}

export async function POST(req: Request): Promise<NextResponse> {
  const { fullname, email, message }: RequestBody = await req.json();

  try {
    await connectDB();
    await TalkToMe.create({ fullname, email, message });
    return NextResponse.json({
      msg: ["Message Send Successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: "Unable to send a message." });
    }
  }
}

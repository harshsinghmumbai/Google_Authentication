import ConnectMongodb from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email } = await req.json();
    await ConnectMongodb();
    await User.create({ name, email });
    return NextResponse.json(
      { message: "User Registered on database side successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Occur Error on user_register route " },
      { status: 500 }
    );
  }
}

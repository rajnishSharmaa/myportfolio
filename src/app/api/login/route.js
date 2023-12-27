import { NextResponse } from "next/server";
import { connectDB } from "../../../database/db";
import { User } from "@/models/user";

connectDB()

export async function GET(request) {

  const users = [
    {
      name: "rajnish",
      phone: "98978787878"
    },
    {
      name: "nikhil",
      phone: "98978787878"
    },
    {
      name: "ajay",
      phone: "98978787878"
    },
    {
      name: "ram",
      phone: "98978787878"
    }
  ]
  return NextResponse.json(users)
}

export async function POST(request) {
  const { name, email, password, about } = await request.json();
  const user = new User({
    name,
    email,
    password,
    about,
  });

  try {
    const createdUser = await user.save();
    const response = NextResponse.json(user, { status: 201 });
    return response;
  } catch (error) {
    return NextResponse.json({ message: "failed to create user !!", status: false, }, { status: 500, });
  }

}



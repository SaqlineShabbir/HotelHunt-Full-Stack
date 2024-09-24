import { dbConnect } from "@/connectDb/DbConnect";
import { userModel } from "@/models/userModel";

import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
export const POST = async (request) => {
  const { firstName, lastName, email, password } = await request.json();
  await dbConnect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = {
    name: `${firstName} ${lastName}`,
    email: email,
    password: hashedPassword,
  };

  try {
    await userModel.create(newUser);
    return new NextResponse("User Created Successfully", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse("Authentication Failed", {
      status: 500,
    });
  }
};

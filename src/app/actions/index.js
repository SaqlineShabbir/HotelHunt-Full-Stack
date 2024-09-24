"use server";

import { signIn } from "../../../auth";

export async function login(formData) {
  try {
    console.log(
      "Attempting to log in with:",
      formData.get("email"),
      formData.get("password")
    );
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    console.log("Login response:", response);
    return response;
  } catch (error) {
    console.error("Error during login:", error);
    throw new Error(error);
  }
}

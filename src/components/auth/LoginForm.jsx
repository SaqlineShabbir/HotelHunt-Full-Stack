"use client";
import { login } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const LoginForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const response = await login(formData);
      console.log(response);
      if (!!response.error) {
        toast.error(response.error.message);
      } else {
        toast.success("Login successful");
        router.push("/bookings");
      }
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <>
      <Toaster />
      <form className="flex flex-col my-6" onSubmit={onSubmit}>
        <div className="flex flex-col gap-2 my-2">
          <label htmlFor="email">Email Address</label>
          <input
            className="border border-black/20 rounded-md px-4 py-2"
            type="email"
            name="email"
            id="email"
          />
        </div>

        <div className="flex flex-col gap-2 my-2">
          <label htmlFor="password">Password</label>
          <input
            className="border border-black/20 rounded-md px-4 py-2"
            type="password"
            name="password"
            id="password"
          />
        </div>
        {error && (
          <span className="text-xl text-red-500 text-center">{error}</span>
        )}
        <button
          type="submit"
          className="bg-green-400 px-8 py-2 rounded-md block  font-bold  hover:shadow active:scale-95 transition-all w-full mt-4"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;

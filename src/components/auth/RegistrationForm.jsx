"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const RegistrationForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const firstName = formData.get("firstName");
      const lastName = formData.get("lastName");
      const email = formData.get("email");
      const password = formData.get("password");

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });
      console.log(res);
      res.status === 201 && router.push("/login");
    } catch (error) {
      setError(error?.message);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col my-6">
      <div className="flex flex-col gap-2 my-2">
        <label htmlFor="firstName">First Name</label>
        <input
          className="border border-black/20 rounded-md px-4 py-2"
          type="text"
          name="firstName"
          id="firstName"
        />
      </div>

      <div className="flex flex-col gap-2 my-2">
        <label htmlFor="lastName">Last Name</label>
        <input
          className="border border-black/20 rounded-md px-4 py-2"
          type="text"
          name="lastName"
          id="lastName"
        />
      </div>

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
      <span className="text-red-400">{error}</span>
      <button
        type="submit"
        className="bg-green-400 px-8 py-2 rounded-md block  font-bold  hover:shadow active:scale-95 transition-all w-full mt-4"
      >
        Create account
      </button>
    </form>
  );
};

export default RegistrationForm;

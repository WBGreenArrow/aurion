"use client"
import Link from 'next/link';
import { Input } from "@/components/Input";

export default function Login() {
  return (
    <div className="container mx-auto ">
    <main className="pt-16 w-[64rem]  mx-auto my-0 flex items-center flex-col">
      <h1 className="font-bold text-3xl font-poppins pb-6">Sign in to your Account</h1>
      <div className="flex items-center justify-center flex-col p-4  w-[30rem] pb-16">
        <Input 
        className="mt-[2rem]"
        label="email" 
        type="email"
        onChange={(value) => console.log(value)}
        />
        <Input 
        className="mt-[2rem]"
        label="password" 
        type="password"
        onChange={(value) => console.log(value)}
        />
      </div>
      <button className="bg-yellow font-poppins text-2xl text-hover:opacity-80 text-black font-semibold py-2 px-4 w-[22rem] h-[4rem] radius rounded-lg">
        Sign in
      </button>
      <span className=" text-grey pt-3">
      Create account
      </span>
    </main>
    </div>
  )
}

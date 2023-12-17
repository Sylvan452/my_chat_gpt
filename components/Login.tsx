'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

function Login() {
  return (
    <div className="bg-[#202123] h-screen flex flex-col items-center justify-center text-center">
      <Image src="/mychatgpt_logo.png" width={350} height={150} alt="logo" />
      <button
        onClick={() => signIn('google')}
        className="text-white font-bold animate-pulse"
      >
        Ask Me Anything! <br></br> Sign in to use AI
      </button>
    </div>
  );
}

export default Login;

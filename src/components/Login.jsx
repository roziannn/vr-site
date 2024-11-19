import React from "react";
import { Github } from "lucide-react";

import vr2 from "../assets/vr-3.jpg";

export const Label = ({ htmlFor, text }) => {
  return (
    <label htmlFor={htmlFor} className="block mb-2 text-sm font-medium dark:text-white">
      {text}
    </label>
  );
};

export const Input = ({ id, type, placeholder }) => {
  return <input type={type} id={id} className=" text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder={placeholder} required />;
};

const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center px-4 bg-cover bg-center" id="login" style={{ backgroundImage: `url(${vr2})` }}>
      <div className="absolute  inset-0 h-full bg-gradient-to-b from-black/50 to-neutral-900/80"></div>
      <div className="relative z-10 border border-neutral-800 bg-neutral-900/50 backdrop-blur-lg rounded-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3 px-6 py-10">
        <div className="flex justify-between items-center mb-4 lg:mb-8">
          <div className="text-white  font-bold text-2xl">
            <a href="/">VMax</a>
          </div>
          <span className="curved-underline text-sm">VMax vision</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-2">Welcome Back!</h1>
        <h1 className="text-sm mb-2 lg:mb-4">
          Don't have an account yet?{" "}
          <a href="/register" className="text-orange-600 hover:underline">
            sign up
          </a>
        </h1>
        <form className="mt-10">
          <div className="mb-6">
            <Label htmlFor="email" text="Email" />
            <Input type="email" id="email" placeholder="john.doe@company.com" />
          </div>
          <div className="mb-6">
            <Label htmlFor="password" text="Password" />
            <Input type="password" id="password" placeholder="•••••••••" />
          </div>
        </form>
        <button type="submit" className="text-white bg-gradient-to-r from-orange-500 to-orange-800 py-3 lg:py-4 px-4 rounded-md focus:ring-4 focus:outline-none font-medium text-sm w-full text-center">
          Sign In
        </button>
        <hr className="border-t-2 border-neutral-800 my-6" />

        <button type="submit" className="text-white bg-gradient-to-r border border-neutral-500 py-3 lg:py-4 px-4 rounded-md focus:ring-4 focus:outline-white font-medium text-sm w-full text-center flex items-center justify-center gap-2">
          <Github className="w-5 h-5" /> Sign In with Github
        </button>
      </div>
    </div>
  );
};

export default Login;

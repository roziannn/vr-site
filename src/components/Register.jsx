import React from "react";

import vr2 from "../assets/vr-1.jpg";

export const Label = ({ htmlFor, text }) => {
  return (
    <label htmlFor={htmlFor} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      {text}
    </label>
  );
};

export const Input = ({ id, type, placeholder }) => {
  return (
    <input
      type={type}
      id={id}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
      placeholder={placeholder}
      required
    />
  );
};

const Register = () => {
  return (
    <div className="flex flex-col h-screen" id="hero">
      <div className="flex flex-row justify-between items-center w-full h-full">
        {/* left */}
        <div className="relative hidden lg:flex w-8/12 h-full p-5">
          <img src={vr2} className="rounded-lg w-full h-full object-cover" alt="man using VR" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-950 to-transparent rounded-b-lg"></div>
          <div className="absolute bottom-10 left-14 text-white font-semibold tracking-wider text-5xl">
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"> The future </span> is closer <br /> than you think.
          </div>
          <div className="absolute top-14 left-20 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl">
            <a href="/">VMax</a>
          </div>
        </div>

        {/* right*/}
        <div className="flex flex-col w-full lg:w-1/2 h-full p-10 justify-center">
          <div className="flex mb-5 lg:hidden text-white font-bold text-xl">
            <a href="/">VMax</a>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-2 lg:mb-4 ">Create an account</h1>
          <p className="text-md lg:text-lg mb-2 lg:mb-4 text-neutral-400">
            Already have an account?{" "}
            <a href="/login" className="text-orange-600 hover:underline">
              Log in
            </a>
          </p>
          <div className="mt-5">
            <form>
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <Label htmlFor="first_name" text="First Name" />
                  <Input type="text" id="first_name" placeholder="John" />
                </div>
                <div>
                  <Label htmlFor="last_name" text="Last Name" />
                  <Input type="text" id="last_name" placeholder="Doe" />
                </div>
              </div>
              <div class="mb-6">
                <Label htmlFor="email" text="Email" />
                <Input type="email" id="email" placeholder="john.doe@company.com" />
              </div>
              <div class="mb-6">
                <Label htmlFor="password" text="Password" />
                <Input type="password" id="password" placeholder="•••••••••" />
              </div>
              <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                  <Input type="checkbox" id="remember" value="" />
                </div>
                <label for="remember" class="ms-2 text-sm font-medium text-neutral-400">
                  I agree with the{" "}
                  <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">
                    terms and conditions
                  </a>
                  .
                </label>
              </div>
            </form>
          </div>
          <button type="submit" class="text-white bg-gradient-to-r from-orange-500 to-orange-800 py-3 lg:py-4 px-4  rounded-md focus:ring-4 focus:outline-none font-medium text-sm w-full sm:w-auto text-center ">
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

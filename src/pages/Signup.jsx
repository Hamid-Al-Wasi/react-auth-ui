import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import heroImg from "../assets/hero.png";
import "../App.css";
import { FaGithub, FaGoogle, FaApple } from "react-icons/fa";
import { PiClipboard } from "react-icons/pi";
function Signup() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen grid lg:grid-cols-2 grid-cols-1">
      <div className="bg-[url('bg.webp')] bg-cover min-h-screen ">
        <div className="mt-20 flex flex-col items-center justify-between min-h-screen">
          <div>
            <p className="text-4xl font-semibold text-white">
              Create your free account
            </p>
            <p className="text-sm text-white py-4 font-semibold">
              Explore GitHub's core features for individuals and organizations.
            </p>
            <a href="#" className="text-white py-2 text-sm font-semibold">
              See what's included{" "}
            </a>
          </div>
          <img src="tres.webp" alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <div className=" w-full flex flex-row justify-end mt-6 px-4">
          <p className="mr-2">Already have an account?</p>
          <p className="underline text-blue-300">Sign in</p>
        </div>
        <div className="w-full max-w-md">
          <p className="font-semibold text-2xl mt-10">Sign up for GitHub</p>
          <button className="bg-gray-200 border-gray-300  mt-10 max-w-md w-full items-center justify-center py-1 flex flex-row rounded-lg hover:bg-gray-300">
            <FaGoogle className="mr-2" />
            <p>Continue with Google </p>
          </button>
          <button className="bg-gray-200 border-gray-300  mt-3 max-w-md w-full items-center justify-center py-1 flex flex-row rounded-lg hover:bg-gray-300">
            <FaApple className="mr-2" />
            <p>Continue with Apple </p>
          </button>

          <div className="flex flex-row items-center w-full max-w-md mt-3.5 ">
            <div className="grow border-t border-gray-400"></div>
            <p>or</p>
            <div className="grow border-t border-gray-400"></div>
          </div>
          <div className="mt-2">
            <label className="font-semibold">Email*</label>
            <input
              type="email"
              placeholder="email"
              className="max-w-md w-full border border-gray-300 py-2 rounded-lg px-2"
            />
          </div>
          <div className="mt-2">
            <label className="font-semibold">Password*</label>
            <input
              type="password"
              placeholder="password"
              className="max-w-md w-full border border-gray-300 py-2 rounded-lg px-2"
            />
          </div>
          <p
            className="text-sm text-gray-500
          "
          >
            Password should be at least 15 characters OR at least 8 characters
            including a number and a lowercase letter.
          </p>
          <div className="mt-2">
            <label className="font-semibold">Username*</label>
            <input
              type="text"
              placeholder="username"
              className="max-w-md w-full border border-gray-300 py-2 rounded-lg px-2"
            />
          </div>

          <p className="text-sm text-gray-500">
            Username may only contain alphanumeric characters or single hyphens,
            and cannot begin or end with a hyphen.
          </p>
          <p className="font-semibold text-sm mt-4">Your Country/Region</p>

          <select
            name=""
            id=""
            className="border border-gray-300 w-full rounded-lg p-2"
          >
            <option>Bangladesh</option>
            <option>China</option>
            <option>Japan</option>
          </select>
          <p className="text-sm text-gray-500">
            For compliance reasons, we're required to collect country
            information to send you occasional updates and announcements.
          </p>
          <p className="text-sm font-semibold mt-3"> Email preference </p>
          <div className="flex flex-row items-center">
            <input type="checkbox" name="" id="" />

            <span className="px-2 text-sm">
              Receive occasional product updates and announcements
            </span>
          </div>
          <button className="bg-black p-3 mt-3 text-white text-semibold w-full rounded-lg text-xl">
            Create Account{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;

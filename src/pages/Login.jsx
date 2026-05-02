import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import heroImg from "../assets/hero.png";
import "../App.css";
import { FaGithub, FaGoogle, FaApple } from "react-icons/fa";
function Login() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="flex flex-col items-center w-full">
        <FaGithub size={40} className="mt-10" />
        <p className="text-xl font-semibold">Sign in to Github</p>
        <div className="w-full max-w-xs mt-8">
          <label className="text-sm w-full font-semibold">
            Username or Email Address
          </label>
          <input
            type="email"
            className="block w-full border border-gray-400 rounded-lg px-2 py-2"
          ></input>
        </div>

        <div className="w-full max-w-xs mt-3.5">
          <div className="flex flex-row justify-between">
            <label className="text-sm font-semibold">Password</label>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forget Password?
            </a>
          </div>
          <input
            type="password"
            className="block w-full border border-gray-400 rounded-lg px-2 py-2"
          ></input>
          <button className="w-full text-white bg-green-600 mt-3.5 py-2 rounded-lg">
            Sign in
          </button>
        </div>
        <div className="flex flex-row items-center w-full max-w-xs mt-3.5 ">
          <div className="grow border-t border-gray-400"></div>
          <p>or</p>
          <div className="grow border-t border-gray-400"></div>
        </div>
        <button className="w-full mt-4 max-w-xs flex flex-row items-center hover:bg-gray-300 justify-center border border-gray-400 py-2 bg-gray-200 rounded-lg">
          <FaGoogle className="mr-2" />
          <p className="font-semibold"> Continue With Google</p>
        </button>

        <button className="mt-2 w-full max-w-xs flex flex-row items-center hover:bg-gray-300 justify-center border border-gray-400 py-2 bg-gray-200 rounded-lg">
          <FaApple className="mr-2" />
          <p className="font-semibold"> Continue With Apple</p>
        </button>
        <p className="font-semibold mt-2 text-sm py-2">
          New to Github?
          <a href="#" className="text-blue-400">
            Create an account
          </a>
        </p>
        <a
          href="#"
          className="text-blue-400 justify-center text-sm font-semibold py-2"
        >
          Sign in with passkey
        </a>
      </div>
    </div>
  );
}

export default Login;

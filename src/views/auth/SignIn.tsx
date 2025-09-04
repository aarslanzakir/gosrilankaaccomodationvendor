import { Link } from "react-router-dom";
import authImg from "assets/img/auth/LoginImg.png";

export default function SignIn() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-navy-900 px-4">
      <div className="flex w-full max-w-5xl flex-col overflow-hidden rounded-2xl md:flex-row">
        {/* Left side - Form */}
        <div className="flex w-full flex-col justify-center p-8 md:w-1/2 lg:p-10">
          <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:mb-10 md:text-4xl">
            GOSRILANKA
          </h1>

          {/* Mobile image (after heading) */}
          <div className="mb-6 block md:hidden">
            <img
              src={authImg}
              alt="auth visual"
              className="w-full max-h-60 rounded-lg object-contain"
            />
          </div>

          <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
            Login
          </h2>
          <p className="mb-6 text-gray-500">Login to access your account</p>

          {/* Email */}
          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="john.doe@gmail.com"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-navy-800 dark:text-white"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-navy-800 dark:text-white"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="mb-4 flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <input type="checkbox" className="mr-2 rounded border-gray-300" />
              Remember me
            </label>
            <Link
              to="/auth/forgot-password"
              className="text-sm font-medium text-red-400 hover:text-red-500"
            >
              Forgot Password
            </Link>
          </div>

          {/* Login button */}
          <button className="mb-4 w-full rounded-md bg-gradient-to-r from-teal-600 to-gray-700 py-2 text-white hover:opacity-90">
            Login
          </button>

          {/* Sign up link */}
          <p className="mb-6 text-center text-sm text-gray-600 dark:text-gray-300">
            Don’t have an account?{" "}
            <Link
              to="/auth/sign-up"
              className="font-medium text-red-400 hover:text-red-500"
            >
              Sign up
            </Link>
          </p>
        </div>

        {/* Right side - Image (desktop only) */}
       {/* Right side - Image (desktop only) */}
<div className="hidden w-full md:flex md:w-1/2 items-center justify-center">
  <img
    src={authImg}
    alt="auth visual"
    className="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg max-h-[75%] object-contain"
  />
</div>


      </div>
    </div>
  );
}

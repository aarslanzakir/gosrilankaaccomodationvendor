import { Link } from "react-router-dom";
import authImg from "assets/img/auth/LoginImg.png";

export default function SignUp() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white dark:bg-navy-900 px-4">
      <div className="flex w-full max-w-5xl flex-col overflow-hidden rounded-2xl md:flex-row">

        {/* Left side - Image for md+ */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center  rounded-l-2xl">
          <img
            src={authImg}
            alt="auth visual"
            className="h-full w-full max-h-[75%] object-contain"
          />
        </div>

        {/* Right side - Form */}
        <div className="flex w-full flex-col justify-center p-8 md:w-1/2 lg:p-10">
          <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            GOSRILANKA
          </h1>

          {/* Mobile Image */}
          <div className="mb-6 md:hidden flex justify-center">
            <img
              src={authImg}
              alt="auth visual"
              className="h-64 w-auto rounded-md"
            />
          </div>

          <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
            Sign up
          </h2>
          <p className="mb-6 text-gray-500">
            Let’s get you all set up so you can access your personal account.
          </p>

          {/* Form grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="First Name"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 md:col-span-2"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 md:col-span-2"
            />
          </div>

          {/* Terms */}
          <div className="mt-4 flex items-center">
            <input type="checkbox" className="mr-2 rounded border-gray-300" />
            <span className="text-sm text-gray-600">
              I agree to all the{" "}
              <Link to="#" className="text-red-400 hover:text-red-500">
                Terms
              </Link>{" "}
              and{" "}
              <Link to="#" className="text-red-400 hover:text-red-500">
                Privacy Policies
              </Link>
            </span>
          </div>

          {/* Create account */}
          <button className="mt-6 w-full rounded-md bg-gradient-to-r from-teal-600 to-gray-700 py-3 text-white hover:opacity-90">
            Create account
          </button>

          {/* Already have account */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/auth/sign-in"
              className="font-medium text-red-400 hover:text-red-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import authImg from "assets/img/auth/LoginImg.png";

export default function ForgotPassword() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white dark:bg-navy-900 px-4">
      <div className="flex w-full max-w-5xl flex-col overflow-hidden rounded-2xl md:flex-row">
        
        {/* Left side - Form */}
        <div className="flex w-full flex-col justify-center p-8 md:w-1/2 lg:p-10">
          <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            GOSRILANKA
          </h1>

          <Link
            to="/auth/sign-in"
            className="mb-6 flex items-center text-sm text-gray-600 hover:text-red-400"
          >
            ← Back to login
          </Link>


            {/* Mobile Image */}
                    <div className="mb-6 md:hidden flex justify-center">
                      <img
                        src={authImg}
                        alt="auth visual"
                        className="h-64 w-auto rounded-md"
                      />
                    </div>

          <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
            Forgot your password?
          </h2>
          <p className="mb-6 text-gray-500">
            Don’t worry, happens to all of us. Enter your email below to recover your password
          </p>

          {/* Email input */}
          <input
            type="email"
            placeholder="john.doe@gmail.com"
            className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />

          {/* Submit button */}
          <button className="w-full rounded-md bg-gradient-to-r from-teal-600 to-gray-700 py-3 text-white hover:opacity-90">
            Submit
          </button>

        
        </div>

        {/* Right side - Image */}
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

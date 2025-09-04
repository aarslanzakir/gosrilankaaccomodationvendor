import authImg from "assets/img/auth/LoginImg.png";

export default function SetPassword() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-navy-900 px-4">
            <div className="flex w-full max-w-5xl flex-col overflow-hidden rounded-2xl md:flex-row">

                {/* Left side - Form */}
                <div className="flex w-full flex-col justify-center p-8 md:w-1/2 lg:p-10">
                    <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
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

                    <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
                        Set a password
                    </h2>


                    <p className="mb-6 text-gray-500">
                        Your previous password has been reseted. Please set a new password for your account.
                    </p>

                    {/* Create Password */}
                    <div className="mb-4 relative">
                        <input
                            type="password"
                            placeholder="Create Password"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 text-gray-700 placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                        />

                    </div>

                    {/* Re-enter Password */}
                    <div className="mb-6 relative">
                        <input
                            type="password"
                            placeholder="Re-enter Password"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 text-gray-700 placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                        />

                    </div>

                    {/* Submit button */}
                    <button className="w-full rounded-md bg-gradient-to-r from-teal-600 to-gray-700 py-3 text-white hover:opacity-90">
                        Set password
                    </button>
                </div>

                {/* Right side - Image */}
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

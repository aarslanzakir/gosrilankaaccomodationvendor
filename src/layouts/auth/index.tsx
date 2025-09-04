import Footer from "components/footer/FooterAuthDefault";
import authImg from "assets/img/auth/auth.png";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import FixedPlugin from "components/fixedPlugin/FixedPlugin";
import SignIn from "views/auth/SignIn"; // ✅ import SignIn directly
import SignUp from "views/auth/SignUp"; // ✅ import SignIn directly

export default function Auth() {

  return (
    <div>
      <div className="relative float-right h-full min-h-screen w-full !bg-white dark:!bg-navy-900">
        <main className={`mx-auto min-h-screen`}>
          <div className="relative flex">
            <div className="mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[75%] lg:h-screen lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
              <div className="mb-auto flex flex-col pl-5 pr-5 md:pr-0 md:pl-12 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
             
                <Routes>
                  <Route path="/sign-in" element={<SignIn />} />
                      <Route path="/sign-up" element={<SignUp />} /> {/* ✅ new SignUp route */}

                  <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
                </Routes>

               
              </div>
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

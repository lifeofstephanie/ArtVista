import image from "./assets/DRIP_20.svg";
import logo from "./assets/Brand.svg";
import google from "./assets/google.svg";
import eyeSlash from "./assets/eye-slash.svg";
import close from "./assets/close.svg";
import mobileLogo from "./assets/Mobile Logo.svg";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);

  const clearEmail = () => setEmail("");

  return (
    <div className="p-6 gap-[90px] xl:gap-[132px] lg:pt-8 lg:px-10 w-full h-full lg:max-h-[800px] xl:max-h-[960px] max-w-[1440px] flex items-center justify-between relative">
      <img
        src={logo}
        alt=""
        className="absolute top-10 left-10 hidden lg:block animate-fadeInUp"
      />
      <div className="mx-auto flex flex-col gap-14 items-center w-fit opacity-0 animate-fadeIn delay-200">
        <img
          src={mobileLogo}
          alt=""
          className="lg:hidden w-[110px] h-[68px] mx-auto animate-fadeInUp"
        />
        <div className="flex flex-col gap-2">
          <p className="font-bold text-[#262F3D] text-[32px] leading-[48px] lg:text-[40px] lg:leading-[60px]">
            ArtVista
          </p>
          <p className="text-[#A4A9B2] text-[14px] leading-[16.8px] lg:text-[16px] lg:leading-[19.2px]">
            Please fill your detail to access your account.
          </p>
        </div>
        <form
          action=""
          className="w-full max-w-[360px]"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-5 mb-8">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="font-medium text-[#344054] text-sm"
              >
                Email
              </label>
              <div className="flex border border-[#A4A9B28C] rounded-[8px] py-[10px] px-[14px]">
                <input
                  type="email"
                  name=""
                  id="email"
                  placeholder="debra.holt@example.com"
                  className="bg-transparent w-full outline-none placeholder:text-sm placeholder:text-[#9198A3]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {email && (
                  <img
                    src={close}
                    alt=""
                    className="cursor-pointer"
                    onClick={clearEmail}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="password"
                className="font-medium text-[#344054] text-sm"
              >
                Password
              </label>
              <div className="flex border border-[#A4A9B28C] rounded-[8px] py-[10px] px-[14px]">
                <input
                  type={viewPassword ? "text" : "password"}
                  name=""
                  id="password"
                  className="bg-transparent w-full outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  src={eyeSlash}
                  alt=""
                  onClick={() => setViewPassword((prev) => !prev)}
                  className={`cursor-pointer transition-transform duration-200 ${
                    viewPassword ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            <div className="flex justify-between font-medium text-[14px] leading-[16.8px]">
              <div className="inline-flex items-center">
                <input type="checkbox" className="text-[#5429FF] rounded-md" />
                <p className="text-[#262F3D] ml-2">Remember me</p>
              </div>
              <p className="text-[#5429FF] cursor-pointer ">Forgot Password?</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-5">
            <button
              type="submit"
              className="w-full h-11 border bg-[#5429FF] rounded-[8px] text-base font-medium text-white hover:bg-white hover:border-[#5429FF] hover:text-[#5429FF] duration-200 hover:scale-[1.05] hover:drop-shadow-lg"
            >
              Sign In
            </button>
            <button className="w-full h-11 border border-[#A4A9B28C] rounded-[8px]">
              <img src={google} alt="" className="mx-auto" />
            </button>
          </div>
          <p className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <span className="font-medium text-[#5429FF] cursor-pointer">
              Sign up
            </span>
          </p>
        </form>
      </div>
      <div className="hidden lg:flex rounded-[40px] bg-[#E5DFFF] w-full h-full items-center justify-center max-w-[500px] xl:max-w-[768px]">
        <img
          src={image}
          alt=""
          style={{
            objectFit:'contain',
            maxWidth:'865px',
            maxHeight:'736px'
          }}
          className="animate-fadeInUp"
        />
      </div>
    </div>
  );
};

export default Login;

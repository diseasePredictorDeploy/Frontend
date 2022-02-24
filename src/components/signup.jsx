import React from "react";
import Email from "../assets/images/email.svg";
import Google from "../assets/images/google.svg";
import lottie from "lottie-web";
import Doctor from "../assets/images/doclottie.json";

export default function () {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#docLottie"),
      animationData: Doctor,
      loop: true, // boolean
      autoplay: true, // boolean
    });
  }, []);

  let options = [
    // {
    //   icon: Email,
    //   name: "Email",
    //   dim: "w-7",
    //   width: "w-[150px]",
    // },
    {
      icon: Google,
      name: "Sign in with Google",
      dim: "w-7",
      width: "w-[250px]",
    },
  ];

  return (
    <section className="box-border grid place-content-center min-h-screen min-w-full bg-[rgb(254,248,237)]">
      <div className="container flex ">
        <div className="flex flex-col basis-[50%] text-xl">
          <div className="flex flex-col basis-[95%] relative">
            <div className="absolute top-[5%] space-y-2 text-center w-full">
              <h1 className="text-[#30194F] font-bold text-7xl ">
                Create Account.
              </h1>
              <p className="text-[#BDAAC2] ">
                Share your thoughts with the world from today.
              </p>
            </div>
            <div className="absolute top-[26%] w-full">
              <div className="space-y-8">
                <div className="flex gap-3 ">
                  {options.map((props) => (
                    <div
                      className={`border-2 border-[#BDAAC2] hover:border-[#cc6fce] mx-auto flex px-8 py-4 items-center gap-2 ${props.width} rounded-full`}
                    >
                      <img src={props.icon} className={props.dim}></img>
                      <p className="text-base">{props.name}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-5 items-center justify-center">
                  <hr className="w-1/5 pt-1/2" />
                  <p className="text-[#BDAAC2] text-base ">
                    or Sign up with Email
                  </p>
                  <hr className="w-1/5 pt-1/2" />
                </div>
              </div>
            </div>
            <div className="absolute top-[65%]">
              <p className="text-[#BDAAC2]">Already have an account</p>
              <a href="#" className="text-[#cc6fce] font-semibold">
                Login!
              </a>
            </div>
          </div>
          <div className=" basis-[5%] text-base">
            By register you agree with our&nbsp;
            <a className="text-[#cc6fce] font-semibold">
              terms and conditions{" "}
            </a>
            and <a className="text-[#cc6fce] font-semibold">privacy policy</a>.
          </div>
        </div>
        <div
          id="docLottie"
          className="basis-[50%]"
          style={{ width: 700, height: 700 }}
        ></div>
      </div>
    </section>
  );
}

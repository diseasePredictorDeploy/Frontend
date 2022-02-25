import React from "react";
import SignUpForm from "../components/signUpForm";
// import Email from "../assets/images/email.svg";
import Google from "../assets/images/google.svg";
// import lottie from "lottie-web";
// import Doctor from "../assets/images/doclottie.json";


export default function Signup() {
  // React.useEffect(() => {
  //   lottie.loadAnimation({
  //     container: document.querySelector("#docLottie"),
  //     animationData: Doctor,
  //     loop: true, // boolean
  //     autoplay: true, // boolean
  //   });
  // }, []);

  let options = [
    {
      icon: Google,
      name: "Sign up with Google",
      dim: "w-7",
      width: "w-[250px]",
    },
    // {
    //   icon: Email,
    //   name: "Facebook",
    //   dim: "w-7",
    //   width: "w-[150px]",
    // },
  ];

  return (
    <section className="box-border grid place-content-center min-h-screen min-w-full bg-[rgb(254,248,237)]">
      <div className="container flex w-screen">
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
            <div className="absolute top-[26.5%] w-full">
              <div className="space-y-4">
                <div className="flex gap-3 ">
                  {options.map((props) => (
                    <div
                      className={`border-2 border-[#BDAAC2] hover:border-[#cc6fce] mx-auto flex px-8 py-4 items-center gap-2 ${props.width} rounded-full`}
                    >
                      <img
                        src={props.icon}
                        className={props.dim}
                        alt="logo"
                      ></img>
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
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2">
              <SignUpForm />
            </div>

            <div className="absolute top-[96%]">
              <span className="text-[#BDAAC2]">Already have an account </span>
              <span className="text-[#cc6fce] font-semibold">Login!</span>
            </div>
          </div>
          <div className=" basis-[5%] text-base">
            By register you agree with our&nbsp;
            <span className="text-[#cc6fce] font-semibold">
              terms and conditions{" "}
            </span>
            and{" "}
            <span className="text-[#cc6fce] font-semibold">privacy policy</span>
            .
          </div>
        </div>
        <div className="basis-[50%] overflow-x-visible">
          <div id="docLottie" style={{ width: 700, height: 700 }}></div>
        </div>
      </div>
    </section>
  );
}

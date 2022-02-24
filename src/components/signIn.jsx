import React from "react";
// import lottie from "lottie-web";
// import Doctor from "../assets/images/doclottie.json";

// const SignIn = () => {
//   React.useEffect(() => {
//     lottie.loadAnimation({
//       container: document.querySelector("#docLottie"),
//       animationData: Doctor,
//       loop: true, // boolean
//       autoplay: true, // boolean
//     });
//   }, []);

const SignIn = () => {
  return (
    <section className="grid place-content-center min-h-screen min-w-full">
      <div className="flex">
        <div className="flex flex-col">
          <div className="">
            <h1>Create Account.</h1>
            <p>Share your thoughts with the world from today.</p>
          </div>
          <div className="">
            Continue with ...
            <div className="">{/* card */}</div>
          </div>
          <div className="">
            <p>Already have an account</p>
            <p>Login!</p>
          </div>
          <div className="">
            By register you agree with our terms and conditions and privacy
            policy.
          </div>
        </div>
        <div
          id="docLottie"
          className="overflow-hidden w-20 h-20"
          style={{ width: 700, height: 700 }}
        ></div>
      </div>
    </section>
  );
};

export default SignIn;

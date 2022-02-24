import React from "react";
import Email from "../assets/images/email.svg";
import Google from "../assets/images/google.svg";
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

export default function () {
	let options = [
		{
			icon: Email,
			name: "Email",
			dim: "w-7",
			width: "w-[125px]",
		},
		{
			icon: Google,
			name: "Google",
			dim: "w-7",
			width: "w-[125px]",
		},
	];

	return (
		<section className="grid place-content-center min-h-screen min-w-full bg-[rgb(254,248,237)]">
			<div className="flex ">
				<div className="flex flex-col justify-evenly">
					{/*ADD SPACE-y-20 HERE*/}

					<div className="space-y-3 ">
						<h1 className="text-[#30194F] font-bold text-4xl ">
							Create Account.
						</h1>
						<p className="text-[#BDAAC2]">
							Share your thoughts with the world from today.
						</p>
					</div>

					<div>
						<p className="text-[#BDAAC2] py-2">Continue with ...</p>
						<div className="">
							<div className="flex gap-4">
								{options.map((props) => (
									<div
										className={`border-2 border-[#BDAAC2] hover:border-[#6A316A] flex px-8 py-5  flex-col items-center gap-3 ${props.width} rounded-sm`}
									>
										<img src={props.icon} className={props.dim}></img>
										<p>{props.name}</p>
									</div>
								))}
							</div>
						</div>
						<p>Already have an account</p>
						<p>Login!</p>
					</div>
					<div className="grid place-content-end h-full">
						<div className="">
							By register you agree with our terms and conditions and privacy
							policy.
						</div>
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
}

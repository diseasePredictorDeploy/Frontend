import React from 'react'
// import lottie from "lottie-web";
// import Contact from "../assets/images/contactlottie.json";
import Contact from '../assets/images/conlottie.gif'
import Team from '../components/Team'
import members from '../components/Member'

export default function about() {
  // React.useEffect(() => {
  //     lottie.loadAnimation({
  //         container: document.querySelector("#conLottie"),
  //         animationData: Contact,
  //         loop: true, // boolean
  //         autoplay: true, // boolean
  //     });
  // }, []);

  function TeamList(members) {
    return (
      <Team
        imgURL={members.imgURL}
        name={members.name}
        about={members.about}
        email={members.email}
        github={members.github}
        linkedin={members.linkedin}
      />
    )
  }
  return (
    <div className="flex flex-col">
      <div className=" p-20 bg-[#FEF8ED]">
        <div className="mb-20">
          <h3 className="text-3xl font-[head-medium] text-[#30194F]">
            Who are we?
          </h3>
          <p className="text-xl my-7 text-[#8946A6]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-[head-medium] text-[#30194F]">
            What is Virtual Vitals?
          </h3>
          <p className="text-xl my-7 text-[#8946A6]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>

        <div className="mb-5">
          <h3 className="text-3xl text-[#30194F]">MEET OUR TEAM</h3>
          <div className="grid grid-rows-3 grid-cols-2 text-[24px] justify-items-center">
            {members.map(TeamList)}
          </div>
        </div>
      </div>
      <div className="bg-[#30194F] w-full">
        <div className=" bg-[#30194F] flex flex-row justify-between text-[#FEF8ED]">
          {/* <div id="conLottie" style={{ width: 500, height: 500 }}></div> */}
          <div className="w-[60vw] my-auto px-20">
            <h3 className="text-[32px] py-10">CONTACT US</h3>
            <p className="text-[26px]">
              Instagram - idbidbv <br />
              Email - VirtualVItals@gmail.com <br />
              Twitter - @VirtualVitals <br />
              Phone No - XXXXXXXXX <br />
            </p>
          </div>
          {/* <div className="w-[600px] h-[600px]"> */}
          <img className="w-[500px] h-[500px]" src={Contact} alt="" />
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

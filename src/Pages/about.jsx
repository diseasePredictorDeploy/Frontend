import React from 'react'
// import lottie from "lottie-web";
// import Contact from "../assets/images/contactlottie.json";
import Contact from '../assets/images/conlottie.gif'
import Dhaivat from '../assets/images/team/Dhaivat.jpg'
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
      <Team imgURL={members.imgURL} name={members.name} about={members.about} />
    )
  }
  return (
    <div className="flex flex-col">
      <div className=" p-20 bg-[#FEF8ED]">
        <div className="my-5">
          <h3 className="text-3xl font-[head-black]">Who are we?</h3>
          <p className="text-xl my-7">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>

        <div className="my-5">
          <h3 className="text-[30px]">WHAT IS VIRTUAL VITALS?</h3>
          <p className="text-[24px] my-7">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>

        <div className="my-5">
          <h3 className="text-[30px]">MEET OUR TEAM</h3>
          <div className="grid grid-rows-3 grid-cols-2 text-[24px]">
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
              Instagram- idbidbv <br />
              EMail- VirtualVItals@gmail.com <br />
              Twitter- @VirtualVitals <br />
              Phone NO- XXXXXXXXX <br />
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

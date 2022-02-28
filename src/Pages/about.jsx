import React from 'react'
import lottie from 'lottie-web'
import Contact from '../assets/images/hello.json'
import Contactus from '../assets/images/Contact us.svg'
import Team from '../components/Team'
import members from '../components/Member'
import Navbar from '../components/Navbar'

export default function About() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#conLottie'),
      animationData: Contact,
      loop: true, // boolean
      autoplay: true, // boolean
    })
  }, [])

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
    <div className="">
      <Navbar />
      <div className="flex flex-col text-center">
        <div className=" p-20 bg-[#FEF8ED]">
          <div className="mb-20 ">
            <h3 className="text-4xl font-[head-medium] font-bold text-[#8946A6]">
              About Us
            </h3>
            <p className="text-xl my-7  text-[#30194F] leading-8 tracking-wide">
              Welcome to (product name), your number one source for modern
              healthcare solutions. We're dedicated to giving you the very best
              of (product), focusing on providing accurate information in an
              easily accessible manner. <br />
              Founded in 2021 by team <strong>The Little Syndicate</strong> ,
              (product name) is an effort made by us in revolutionizing
              healthcare systems. When our team first started out, our passion
              for powering healthcare systems with Artificial Intelligence drove
              us to do tons of research, so that (product name) can offer you an
              easily accessible diagnostic laboratory in your home. We now serve
              people all over the world, and are thrilled that we're able to
              turn our passion into our own product. We hope you appreciate our
              service and lead a healthy life. If you have any questions or
              suggestions, please don't hesitate to contact us.
            </p>
          </div>

          <div className="mb-20">
            <h3 className="text-4xl font-[head-medium] font-bold text-[#8946A6]">
              What is Virtual Vitals?
            </h3>
            <p className="text-xl my-7 text-[#30194F] leading-8 tracking-wide">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>

          <div className="mb-5">
            <h3 className="text-[#30194F] font-bold font-[head-medium] text-7xl text-center mb-12">
              Meet Our Team
            </h3>
            <div className="grid grid-rows-3 grid-cols-2 text-[24px] justify-items-center">
              {members.map(TeamList)}
            </div>
          </div>
        </div>

        <div className=" w-full flex flex-row">
          <div className="w-50 ">
            <img
              src={Contactus}
              alt="gif"
              style={{ width: 500, height: 500 }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  )
}

//  {
//    /* <h3 className="text-[32px] py-10">CONTACT US</h3>
//               <p className="text-[26px]">
//                 Instagram - idbidbv <br />
//                 Email - VirtualVItals@gmail.com <br />
//                 Twitter - @VirtualVitals <br />
//                 Phone No - XXXXXXXXX <br />
//               </p>*/
//  }

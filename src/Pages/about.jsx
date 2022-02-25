import React from "react"
// import lottie from "lottie-web";
// import Contact from "../assets/images/contactlottie.json";
import Contact from "../assets/images/conlottie.gif";

import Dhaivat from '../assets/images/team/Dhaivat.jpg'

export default function about() {
    // React.useEffect(() => {
    //     lottie.loadAnimation({
    //         container: document.querySelector("#conLottie"),
    //         animationData: Contact,
    //         loop: true, // boolean
    //         autoplay: true, // boolean
    //     });
    // }, []);
    return (
        <div className='flex flex-col'>
            <div className=' p-20 bg-[#FEF8ED]'>
                <div className='my-5'>
                    <h3 className='text-[30px]'>WHO ARE WE?</h3>
                    <p className='text-[24px] my-7'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>

                <div className='my-5'>
                    <h3 className='text-[30px]'>WHAT IS VIRTUAL VITALS?</h3>
                    <p className='text-[24px] my-7'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>

                <div className='my-5'>
                    <h3 className='text-[30px]'>MEET OUR TEAM</h3>
                    <div className='grid grid-rows-3 grid-cols-2 text-[24px]'>
                        <div className=' my-10 flex flex-col px-32'>
                            <div className='flex flex-row pb-10'>
                                <p className='my-auto mr-16'>Dhaivat Vipat</p>
                                <img className='w-40 h-40 object-cover rounded-full' src={Dhaivat} alt="Dhaivat" />
                            </div>
                            <div className='w-96'>Description. Amet minim mollit non deserunt ullamco</div>
                        </div>

                        <div className=' my-10 flex flex-col px-32'>
                            <div className='flex flex-row pb-10'>
                                <p className='my-auto mr-16'>Dhaivat Vipat</p>
                                <img className='w-40 h-40 object-cover rounded-full' src={Dhaivat} alt="Dhaivat" />
                            </div>
                            <div className='w-96'>Description. Amet minim mollit non deserunt ullamco</div>
                        </div>

                        <div className=' my-10 flex flex-col px-32'>
                            <div className='flex flex-row pb-10'>
                                <p className='my-auto mr-16'>Dhaivat Vipat</p>
                                <img className='w-40 h-40 object-cover rounded-full' src={Dhaivat} alt="Dhaivat" />
                            </div>
                            <div className='w-96'>Description. Amet minim mollit non deserunt ullamco</div>
                        </div>

                        <div className=' my-10 flex flex-col px-32'>
                            <div className='flex flex-row pb-10'>
                                <p className='my-auto mr-16'>Dhaivat Vipat</p>
                                <img className='w-40 h-40 object-cover rounded-full' src={Dhaivat} alt="Dhaivat" />
                            </div>
                            <div className='w-96'>Description. Amet minim mollit non deserunt ullamco</div>
                        </div>

                        <div className=' my-10 flex flex-col px-32'>
                            <div className='flex flex-row pb-10'>
                                <p className='my-auto mr-16'>Dhaivat Vipat</p>
                                <img className='w-40 h-40 object-cover rounded-full' src={Dhaivat} alt="Dhaivat" />
                            </div>
                            <div className='w-96'>Description. Amet minim mollit non deserunt ullamco</div>
                        </div>

                        <div className=' my-10 flex flex-col px-32'>
                            <div className='flex flex-row pb-10'>
                                <p className='my-auto mr-16'>Dhaivat Vipat</p>
                                <img className='w-40 h-40 object-cover rounded-full' src={Dhaivat} alt="Dhaivat" />
                            </div>
                            <div className='w-96'>Description. Amet minim mollit non deserunt ullamco</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#30194F] w-screen'>
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

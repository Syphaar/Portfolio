// import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaArrowDown } from "react-icons/fa6";
import Img1 from "../assets/images/one.jpg"

const Picture = [
    {
        id: 1,
        img: Img1,
    }
]

const Sectionone = () => {
    return (
        <div className="bg-bluee">
            <div className="block justify-center px-7 pt-10 flex-row md:px-10 md:flex md:justify-between md:gap-10 md:flex-row-reverse xl:gap-11">
                <div>
                    {Picture.map((data) => (
                        <div key={data.id} className="block mx-auto ">
                            <div className="md:border-2 rounded-xl md:pt-4 md:pb-6">
                                <div className="md:flex gap-3 md:pb-2 md:pl-3 lg:pl-6">
                                    <span className="w-5 h-5 bg-silver rounded-full"></span>
                                    <span className="w-5 h-5 bg-silver rounded-full"></span>
                                    <span className="w-5 h-5 bg-silver text-red-900 rounded-full"></span>
                                </div>
                                <img src={data.img} alt="" className="w-[60%] h-[60%] block mx-auto rounded-lg md:rounded-xl md:w-[100%] md:h-[100%]" />
                            </div>
                        </div>
                    ))}
                    {/* <img src="../assets/images/one.jpg" alt="" className="w-full h-full" /> */}
                </div>
                <div className="block mx-auto pt-5 md:w-full md:pt-6 md:items-center lg:pt-20 xl:pt-36 xl:w-[60%]">
                    <div className="text-center md:text-left">
                        <p className="text-white xl:text-xl">Hi, my name is</p>
                        <p className="text-white text-2xl md:text-4xl md:py-2 lg:text-5xl xl:text-7xl">Sifon Emmanuel.</p>
                        <p className="pt-2 xl:pt-3 text-white">
                            Lorem ipsum dolor sit amet consectetur, adipisicing d ddd
                            elit. Aliquid perspiciatis nulla suscipit incidunt 
                            nostrum doloremque fuga itaque? rr frrrf fffef
                            elit. Aliquid perspiciatis nulla suscipit incidunt 
                            nostrum doloremque fuga itaque?
                            elit. Aliquid perspiciatis nulla suscipit incidunt 
                            nostrum doloremque fuga itaque?
                            <span className="text-white">Developer</span>
                        </p>
                    </div>
                    <div className="py-4 md:pt-6 md:pb-4 xl:pb-6 xl:w-[60%]">
                        <div className="flex justify-center gap-4 text-white md:gap-6 md:justify-start md:text-2xl">
                        <a href="http://" target="_blank" rel="noopener noreferrer" className="hover:text-silver duration-300 cursor-pointer">
                            <FaLinkedin />
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer" className="hover:text-silver duration-300 cursor-pointer">
                            <FaTwitter />
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer" className="hover:text-silver duration-300 cursor-pointer">
                            <FaGithub />
                        </a>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <button className="flex justify-center gap-2 items-center cursor-pointer text-white bg-transparent px-4 py-2 rounded border-2 border-White font-bold hover:bg-white hover:border-white hover:text-black duration-300 md:px-5 md:py-3">
                            <FaArrowDown />
                            <p>Download CV</p>
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
 
export default Sectionone;
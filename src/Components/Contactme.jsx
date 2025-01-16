import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa6";
import { TiLocationArrow } from "react-icons/ti";
import { HiHandThumbUp } from "react-icons/hi2";


const Heading = [
    {id: 1, fheading:"Contact", number:"05. "},
]

const ContactInfo = [
    {
        id: 1,
        info: "Do you need a Front-end engineer? I am the one to call ",
    }
]

const ContactInfo2 = [
    {
        id: 1,
        info: "I am active on these platforms. Don't be a stranger and don't hesitate to reach out anytime.",
    }
]


const Contactme = () => {
    return (
        <div className="bg-bluee">
            <div className="px-7 pt-12 pb-12 md:pt-16 md:px-10 lg:pt-20">
                <div className="pb-4 xl:pb-10">
                    {Heading.map((data) => (
                        <div key={data.id} className="text-center">
                            <h2 className="text-3xl text-white"><span className="text-silver">{data.number}</span> {data.fheading}</h2>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="md:flex md:gap-5">
                        <div className="pb-3 text-white">
                            <div className="pb-3 sm:flex justify-between gap-4 md:block">
                                <div className="pb-3 sm:w-[50%] md:w-[100%]">
                                    {ContactInfo.map((msg) => (
                                        <div key={msg.id} className="flex">
                                            <p>{msg.info} </p><span className="text-2xl text-silver"><HiHandThumbUp /></span>
                                        </div>
                                    ))}
                                </div>
                                <div className="sm:w-[50%] md:w-[100%]">
                                    {ContactInfo2.map((msg2) => (
                                        <div key={msg2.id}>
                                            <p>{msg2.info}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="py-3 md:pt-6 md:pb-4 xl:pb-6 xl:w-[60%]">
                                <div className="flex justify-center gap-4 text-2xl md:gap-6 md:justify-start md:text-2xl">
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
                        </div>
                        <div className=" text-center px-4 py-8 md:w-[100%] lg:w-[68%] rounded-lg border-2 border-white xl:px-24 xl:py-11">
                            <form action="">
                                <div className="pb-3 md:flex md:gap-4 w-[100%] lg:justify-between">
                                    <div className="pb-3 md:pb-5">
                                        <input type="text" name="name" placeholder="Full Name" className="text-white w-full sm:w-[60%] px-2 py-1 rounded border-2 border-white bg-transparent md:w-[100%] lg:py-3" required />
                                    </div>
                                    <div className="pb-3 md:pb-5">
                                        <input type="email" name="email" placeholder="Enter Your Email" className="text-white w-full sm:w-[60%] px-2 py-1 rounded border-2 border-white bg-transparent md:w-[100%] lg:py-3" required />
                                    </div>
                                </div>
                                <div className="pb-3">
                                    <textarea name="textarea" className="text-white w-full sm:w-[60%] px-2 py-1 rounded border-2 border-white resize-none bg-transparent md:w-[100%] lg:pb-10 lg:text-center xl:pb-24" required></textarea>
                                </div>
                                <div className="flex justify-center">
                                    {/* <TiLocationArrow /> */}
                                    <button className="">
                                        <div className="flex text-white font-bold border-2 px-3 py-2 rounded hover:bg-white hover:text-black duration-300">
                                            <TiLocationArrow className="text-2xl"/>
                                            <p>Send Message</p>
                                        </div>
                                    </button>
                                    {/* <input type="submit" value="Send Message" className="text-white bg-transparent border-2 rounded px-3 py-2 cursor-pointer" /> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Contactme;
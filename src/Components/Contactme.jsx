import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa6";
import { HiHandThumbUp } from "react-icons/hi2";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

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

const socialLinks = [
    {
        id: 1,
        profile: "https://github.com/Syphaar",
        lname: "Github",
        icon1: <FaGithub />,
        icon2: <FaArrowUpRightFromSquare />
    },
    {
        id: 2,
        profile: "https://www.linkedin.com/in/sifon-emmanuel-180bb0344/",
        lname: "Linkedin",
        icon1: <FaLinkedin />,
        icon2: <FaArrowUpRightFromSquare />

    },
]

const socialLinks2 = [
    {
        id: 2,
        profile: "https://twitter.com/Sy_phaar",
        lname: "Twitter",
        icon1: <FaTwitter />,
        icon2: <FaArrowUpRightFromSquare />
    }
]

const Contactme = ({ contactRef }) => {
    return (
        <div ref={contactRef} id="contact" className="bg-blackone overflow-hidden">
            <div className="px-7 pt-12 pb-20 md:pt-16 md:px-10 lg:px-24 lg:pt-20 xl:px-44">
                <div className="pb-4 xl:pb-10">
                    {Heading.map((data) => (
                        <div key={data.id} className="font-bold">
                            <h2 className="text-3xl text-white sm:text-4xl">{data.fheading}</h2>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="md:flex md:justify-between md:gap-5">
                        <div className="pb-3 text-white" data-aos="fade-right">
                            <div className="pb-3 sm:flex justify-between gap-4 md:block">
                                <div className="pb-3 sm:w-[50%] md:w-[100%]">
                                    {ContactInfo.map((msg) => (
                                        <div key={msg.id} className="">
                                            <p className="inline-block md:flex">{msg.info} <span className="text-2xl text-milkey"><HiHandThumbUp /></span></p>
                                        </div>
                                    ))}
                                </div>
                                <div className="sm:w-[50%] md:w-[80%] lg:w-[90%] xl:w-[100%]">
                                    {ContactInfo2.map((msg2) => (
                                        <div key={msg2.id}>
                                            <p>{msg2.info}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="">
                                {/* <div className=""> */}
                                    <div className="pt-2">
                                        {/* <a href="mailto:sifonemmanuel123@gmail.com?subject=Inquiry&body=Hello,%20I%20am%20interested%20in%20your%20services."> */}
                                        <a href="mailto:sifonemmanuel123@gmail.com">
                                            <button className="bg-milkey flex justify-center items-center w-full px-3 py-3 rounded text-xl font-bold border-2 border-milkey hover:bg-transparent duration-300 md:w-60 lg:px-3 lg:py-2 lg:w-40">
                                                {/* <FaArrowDown /> */}
                                                Contact Me
                                            </button>
                                        </a>
                                    </div>
                                {/* </div> */}
                            </div>
                        </div>
                        <div>
                            <div className="text-white justify-center gap-4 pt-7 sm:text-xl md:gap-6 md:justify-start md:text-2xl" data-aos="fade-left">
                                <div className="flex justify-center gap-8 md:block">
                                    {socialLinks.map((socials1) => (
                                        <div key={socials1.id}>
                                            <div className="flex justify-evenly md:block">
                                                <p className="flex justify-start items-center gap-1 pb-3 sm:gap-2 md:gap-3">
                                                    {socials1.icon1}
                                                    {socials1.lname}
                                                    <a href={socials1.profile} target="_blank" rel="noopener noreferrer" className="hover:text-milkey duration-300 cursor-pointer">
                                                        {socials1.icon2}
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {socialLinks2.map((social2) => (
                                    <div key={social2.id}>
                                        <p className="flex justify-center items-center pt-2 gap-1 pb-3 sm:gap-2 md:gap-3 md:justify-start">                                        
                                            {social2.icon1}
                                            {social2.lname}
                                            <a href={social2.profile} target="_blank" rel="noopener noreferrer" className="hover:text-milkey duration-300 cursor-pointer">
                                                {social2.icon2}
                                            </a>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Contactme;
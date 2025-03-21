import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa6";
import PropTypes from "prop-types"; // Import prop-types

const socialLinks = [
    {
        id: 1,
        profile: "https://github.com/Syphaar",
        icon: <FaGithub />
    },
    {
        id: 2,
        profile: "https://www.linkedin.com/in/sifon-emmanuel-180bb0344/",
        icon: <FaLinkedin />
    },
    {
        id: 3,
        profile: "https://twitter.com/Sy_phaar",
        icon: <FaTwitter />
    },
]

const Info = [
    {
        id: 1,
        about: "I am a Frontend Engineer passionate about building interactive, user-friendly and outstanding web applications that boost brand visibility.",
    }
]

const Sectionone = ({ sectiononeRef }) => {
    return (
        <div ref={sectiononeRef} id="sectionone" className="relative w-full min-h-screen">
            
            {/* 🔥 Fixed Background Image Fix for iPhones */}
            <div className="fixed top-0 left-0 w-full h-full bg-[url('https://res.cloudinary.com/dlcoacdkb/image/upload/v1741245920/background_dociug.jpg')] bg-cover bg-center bg-no-repeat -z-10"></div>

            {/* Content Section */}
            <div className="relative z-10 flex justify-center items-center w-full min-h-screen">
                <div className="pb-12 xl:pb-0">
                    <div className="text-center text-white px-10 pb-10 md:pb-20 xl:pb-14">
                        <p className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl">Hi, I am <span className="">Sifon Emmanuel</span></p>
                        {Info.map((text) => (
                            <div key={text.id} className="py-5">
                                <p  className="md:px-20 lg:px-32 xl:px-56">{text.about}</p>
                            </div>
                        ))}
                        <div className="flex justify-center gap-5">
                            {socialLinks.map((socials) => (
                                <div key={socials.id}>
                                    <div>
                                        <a href={socials.profile} target="_blank" className="">
                                            <div className="hover:text-milkey hover:border-milkey border-2 border-white rounded-full px-1 py-1 duration-300 cursor-pointer">
                                                {socials.icon}
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-white flex justify-center gap-10">
                        <div className="text-center sm:flex sm:justify-center sm:gap-5">
                            <div className="pb-4">
                                <p className="font-bold">Email</p>
                                <p>sifonemmanuel123@gmail.com</p>
                            </div>
                            <div className="sm:border-l-2 sm:pl-5">
                                <p className="font-bold">Phone</p>
                                <p>+234 907 290 3517</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

// Define prop types
Sectionone.propTypes = {
    sectiononeRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};
 
export default Sectionone;
import { FaArrowDown } from "react-icons/fa6";
import PropTypes from "prop-types"; // Import prop-types

const Heading = [
    {id: 1, fheading:"About Me"},
]

const Description = [
    {
        id:1,
        info: "I am a Frontend Engineer that believes in writing exceptional code that is visually appealing, highly functional and user-friendly."
    },
    {
        id:2,
        info: "I'm focused on creating responsive web applications, meeting deadlines, delivering exceptional results and exceeding expectations. I also focus on the accessibility, scalability and speed of every website I create."
    },
    {
        id:3,
        info: "With a constant eagerness to learn and stay updated with the latest technologies, I continually strive to challange my abilities and improve my skills with each project I take on."
    },
    {
        id:4,
        info: "Here are some technologies I work with:"
    },
]

const Stack = [
    {
        id: 1,
        language: "HTML",
    },
    {
        id: 2,
        language: "CSS",
    },
    {
        id: 3,
        language: "TailwindCSS",
    },
]

const Stack2 = [
    {
        id: 1,
        language: "JavaScript",
    },
    {
        id: 2,
        language: "React.js",
    },
]

const Image = [
    {
        id:1,
        // pic: Img1
    },
]

const About = ({ aboutRef }) => {
    return (
        <div ref={aboutRef} id="about" className="bg-blackone overflow-hidden">
            <div className="px-7 pt-12 md:pt-16 md:px-10 lg:px-24 lg:pt-20 xl:px-44">
                <div className="pb-4 xl:pb-10">
                    {Heading.map((data) => (
                        <div key={data.id} className="font-bold">
                            <h2 className="text-3xl text-white sm:text-4xl"> {data.fheading}</h2>
                        </div>
                    ))}
                </div>
                <div className="md:flex md:justify-evenly md:gap-10 xl:gap-12">
                    <div className="md:w-[100%]" data-aos="fade-right">
                        {Image.map((data3) => (
                            <div key={data3.id}>
                                <div>
                                    <img src="https://res.cloudinary.com/dlcoacdkb/image/upload/v1741245924/IMG_8795_phc3sl.jpg" alt="" className="w-full h-auto block rounded-lg md:rounded-xl md:w-[100%] md:h-[100%]" />
                                    {/* <img src={data3.pic} alt="" className="w-[60%] h-[60%] block mx-auto rounded-lg md:rounded-xl md:w-[100%] md:h-[100%]" /> */}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="block mx-auto pt-4 text-white md:flex md:pt-0 md:w-full md:items-center xl:w-[80%] xl:pt-0" data-aos="fade-left">
                        <div>
                            {Description.map((data2) => (
                                <div key={data2.id} className="pb-3 xl:pt-4">
                                    <p>{data2.info}</p>
                                </div>
                            ))}
                            <div className="flex gap-9 ml-7 sm:ml-10 sm:gap-20">
                                <div>
                                    {Stack.map((data4) => (
                                        <div key={data4.id}>
                                            <ul>
                                                <li className="pb-1 list-disc xl:pb-3">{data4.language}</li>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {Stack2.map((data5) => (
                                        <div key={data5.id}>
                                            <ul>
                                                <li className="pb-1 list-disc xl:pb-3">{data5.language}</li>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="pt-2">
                                <button className="bg-milkey flex justify-center items-center w-full gap-2 px-3 py-2 rounded font-bold border-2 border-milkey hover:bg-transparent duration-500 sm:w-60 lg:w-40"
                                 onClick={() => {
                                    const fileUrl = "https://docs.google.com/document/d/1cVY4RJc82RZ0GtBoGG5LuUjOY5_iOnUB2ffFJqAmoDk/export?format=pdf";
                                    const fileName = "My_Custom_CV.pdf"; // Change this to your desired filename

                                    const a = document.createElement("a");
                                    a.href = fileUrl;
                                    a.setAttribute("download", fileName); // ✅ Correct way to rename the file
                                    document.body.appendChild(a);
                                    a.click();
                                    document.body.removeChild(a);
                                }}
                                >
                                    <FaArrowDown />
                                    Download CV
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Define prop types
About.propTypes = {
    aboutRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};

export default About;
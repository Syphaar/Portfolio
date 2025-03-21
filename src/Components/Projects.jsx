import { BsGlobe } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types"; // Import prop-types

const Heading = [
    {id: 1, fheading:"Projects", number:"04. "},
]

const Pictures = [
    {
        id: 1,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1741245924/em_bb49bl.png",
        website: "Em & T",
        github: "https://github.com/Syphaar/Em-t-reactjs",
        live: "https://emtbuilding.vercel.app/",
    },
    {
        id: 2,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1741245927/fresh-cut_z4oio2.png",
        website: "Fresh-cut Saloon",
        github: "https://github.com/Syphaar/fresh-cut-saloon-reactjs",
        live: "https://fresh-cut-saloon-reactjs.vercel.app/",
    },
    {
        id: 3,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1741245929/kitchen_dpvuqw.png",
        website: "Luxuryy Kitchen",
        github: "https://github.com/Syphaar/luxuryy-kitchen-reactjs",
        live: "https://luxuryy-kitchen.vercel.app/",
    },
    {
        id: 4,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1741245926/modern_yqpejr.png",
        website: "Stylish",
        github: "https://github.com/Syphaar/ecommerce-clothing-website",
        live: "https://stylish-bay.vercel.app/",
    },
    {
        id: 5,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1741245925/urban-estate_aonlwt.jpg",
        website: "Urban Estate",
        github: "https://github.com/Syphaar/urban-estate-reactjs",
        live: "https://urban-estate-alpha.vercel.app/",
    },
    {
        id: 6,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1741245927/luxury-living_rvfc45.png",
        website: "Luxury Living",
        github: "https://github.com/Syphaar/luxury-living-reactjs",
        live: "https://luxury-living-plum.vercel.app/",
    },
]

const Pictures2 = [
    {
        id: 1,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1741245925/foodie_rfugwe.png",
        website: "Foodie Restaurant",
        github: "https://github.com/Syphaar/foodie-website",
        live: "https://foodie-website-three.vercel.app/",
    },
]

const Projects = ({ projectsRef }) => {
    return (
        <div ref={projectsRef} id="projects" className="bg-blackone mt-0">
            <div className="px-7 pt-12 md:pt-16 md:px-10 lg:px-24 lg:pt-20 xl:px-44" data-aos="fade-up">
                <div className="pb-4 xl:pb-10">
                    {Heading.map((data) => (
                        <div key={data.id} className="font-bold">
                            <h2 className="text-3xl text-white sm:text-4xl">{data.fheading}</h2>
                        </div>
                    ))}
                </div>
                <div className="grid gap-10 lg:gap-10 xl:none xl:grid-cols-1 items-center lg:justify-center">
                    <div className="grid justify-between gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {Pictures.map((projectpic) => (
                            <div key={projectpic.id} className="border-2 border-blacktwo bg-blacktwo shadow-xl rounded-xl px-5 pt-5 pb-3">
                                <div>
                                    <img src={projectpic.img} alt="" className="w-screen h-42 sm:h-45 md:w-screen lg:h-42 2xl:h-1/6" />
                                    <div>
                                        <p className="font-bold text-milkey pt-3">{projectpic.website}</p>
                                        <div className="pt-2 text-white sm:flex gap-5">
                                            <a href={projectpic.github} target="_blank"><p className="flex gap-1 items-center pb-2 hover:text-milkey duration-300 sm:pb-1 md:pb-0"><FaGithub /> View Project</p></a>
                                            <a href={projectpic.live} target="_blank"><p className="flex gap-1 items-center hover:text-milkey duration-300"><BsGlobe /> View live</p></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-10 md:gap-10">
                        {Pictures2.map((projectpic) => (
                            <div key={projectpic.id} className="w-full sm:w-80 md:w-[47%] border-2 border-blacktwo bg-blacktwo shadow-xl rounded-xl px-5 pt-5 pb-3 lg:w-[30%]">
                                <div>
                                    <img src={projectpic.img} alt="" className="w-screen h-42 sm:h-38 md:w-screen lg:h-32 2xl:h-1/6 " />
                                    <div>
                                        <p className="font-bold text-milkey pt-3">{projectpic.website}</p>
                                        <div className="pt-2 text-white sm:flex gap-5">
                                            <a href={projectpic.github} target="_blank"><p className="flex gap-1 items-center pb-2 hover:text-milkey duration-300 cursor-pointer sm:pb-1 md:pb-0"><FaGithub /> View Project</p></a>
                                            <a href={projectpic.live} target="_blank"><p className="flex gap-1 items-center hover:text-milkey duration-300 cursor-pointer"><BsGlobe /> View live</p></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Define prop types
Projects.propTypes = {
    projectsRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};

export default Projects;
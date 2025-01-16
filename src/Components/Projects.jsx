import Img1 from "../assets/images/one.jpg";
import { BsGlobe } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";


const Heading = [
    {id: 1, fheading:"Projects", number:"04. "},
]

const Pictures = [
    {
        id: 1,
        img: Img1
    },
    {
        id: 2,
        img: Img1
    },
    // {
    //     id: 3,
    //     img: Img1
    // },
]

const Pictures2 = [
    {
        id: 1,
        img: Img1
    },
    // {
    //     id: 2,
    //     img: Img1
    // },
    // {
    //     id: 3,
    //     img: Img1
    // },
]

const Projects = () => {
    return (
        <div className="bg-bluee mt-0">
            <div className="px-7 pt-12 md:pt-16 md:px-10 lg:pt-20">
                <div className="pb-4 xl:pb-10">
                    {Heading.map((data) => (
                        <div key={data.id} className="text-center">
                            <h2 className="text-3xl text-white"><span className="text-silver">{data.number}</span> {data.fheading}</h2>
                        </div>
                    ))}
                </div>
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-10 lg:flex lg:justify-between">
                    {/* <div className="justify-between gap-10 sm:flex md:gap-10"> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 justify-between gap-10">
                        {Pictures.map((projectpic) => (
                            <div key={projectpic.id} className="border-2 rounded-xl px-5 py-5">
                                <div>
                                    <img src={projectpic.img} alt="" className="w-screen h-42 sm:h-36 md:w-screen lg:h-48 xl:h-64 2xl:h-1/6 " />
                                    <div className="pt-3 text-white md:flex gap-5">
                                        <a href="http://" target="_blank"><p className="flex gap-1 items-center pb-2 sm:pb-1 md:pb-0"><FaGithub /> View Project</p></a>
                                        <a href="http://" target="_blank"><p className="flex gap-1 items-center hover:to-blue-600"><BsGlobe /> View live</p></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-10 md:gap-10 lg:block">
                        {Pictures2.map((projectpic) => (
                            <div key={projectpic.id} className="w-full sm:w-80 md:w-[47%] border-2 rounded-xl px-5 py-5 lg:w-full">
                                <div>
                                    <img src={projectpic.img} alt="" className="w-screen h-42 sm:h-36 md:w-screen lg:h-48 xl:h-64 2xl:h-1/6 " />
                                    <div className="pt-3 text-white md:flex gap-5">
                                        <a href="http://" target="_blank"><p className="flex gap-1 items-center pb-2 sm:pb-1 md:pb-0"><FaGithub /> View Project</p></a>
                                        <a href="http://" target="_blank"><p className="flex gap-1 items-center hover:to-blue-600"><BsGlobe /> View live</p></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;
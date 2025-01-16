// let Links = [
//     {lname:"Home", link:"/", number:"01. "},
//     {lname:"About", link:"/", number:"02. "},
//     {lname:"Services", link:"/", number:"03. "},
//     {lname:"Projects", link:"/", number:"04. "},
//     {lname:"Contact", link:"/", number:"05. "},
// ]

import Img1 from "../assets/images/one.jpg"

const Heading = [
    {id: 1, fheading:"About Me", number:"02. "},
]

const Description = [
    {
        id:1,
        info: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sit laboriosam possimus tempore, alias nulla ex quos laudantium sequi aliquid perferendis voluptate dicta, architecto illum ipsum impedit. Amet delectus omnis doloremque dolor quidem sapiente atque."
    },
    {
        id:2,
        info: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque necessitatibus, maiores soluta unde dolor deserunt earum sint repudiandae rem nobis blanditiis quod consectetur saepe."
    },
    {
        id:3,
        info: "3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit dolorum delectus accusamus quas qui incidunt obcaecati."
    },
    {
        id:4,
        info: "4 Lorem ipsum dolor sit amet consectetur adipisicing."
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
        pic: Img1
    },
]

const About = () => {
    return (
        <div className="bg-bluee">
            <div className="px-7 pt-12 md:pt-16 md:px-10 lg:pt-20" data-aos="fade-up">
                <div className="pb-4 xl:pb-10">
                    {Heading.map((data) => (
                        <div key={data.id} className="text-center">
                            <h2 className="text-3xl text-white"><span className="text-silver">{data.number}</span> {data.fheading}</h2>
                        </div>
                    ))}
                </div>
                <div className="md:flex md:justify-between md:gap-10 xl:gap-12">
                    <div>
                        {Image.map((data3) => (
                            <div key={data3.id}>
                                <div>
                                    <img src={data3.pic} alt="" className="w-[60%] h-[60%] block mx-auto rounded-lg md:rounded-xl md:w-[100%] md:h-[100%]" />
                                    {/* <img src={data3.pic} alt="" className="w-[60%] h-[60%] block mx-auto rounded-lg md:rounded-xl md:w-[100%] md:h-[100%]" /> */}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="pt-5 md:pt-0 md:w-full xl:w-[60%]"> */}
                    {/* block mx-auto pt-5 md:w-full md:pt-12 md:items-center lg:pt-28 xl:pt-36 xl:w-[60%]" */}

                    <div className="block mx-auto pt-4 text-white md:w-full md:items-center xl:w-[60%] xl:pt-10">

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
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;
const Heading = [
    {id: 1, fheading:"Services"},
]

const Details = [
    {
        id: 1,
        heading: "Front-end development",
        information: "I Specialize in transforming designs into captivating, responsive, visually compelling and interactive web applications using frameworks like React.js. My approach goes beyond just implementing designs, I focus on usability, accessibility, and cross-browser compatibility to ensure consistency across all devices. I build intuitive interfaces that align with business goals and user needs. Beyond development, I prioritize collaboration, clear communication, and problem-solving to ensure seamless project execution. My goal is to bridge the gap between design and functionality, delivering digital products that not only look great but also perform exceptionally well.",
    },
    {
        id: 2,
        heading: "Performance and Optimization",
        information: "Speed and performance directly impact user experience, conversion rates, and SEO rankings. A slow website leads to frustrated users and lost opportunities, which is why I focus on optimizing every aspect of the frontend. I implement best practices like code splitting and lazy loading to enhance load times. I also enhance website performance by making animations smoother and customizing CSS, javascript and react so they don't delay page rendering. My development process ensures smooth interactions, fast page speeds and a fluid experience across all devices. I stay updated on the latest perfomance strategies to ensure applications meet modern web standards. My goal is to deliver fast, efficient and a good digital experience that keeps users engaged and businesses ahead of the competition. ",
    },
]

// const Details2 = [
//     {
//         id: 1,
//         heading: "Training",
//         information: "I provide personalized frontend development, training, covering everything from core technologies like HTML, CSS, Javascript. I equip individuals with the speed needed to master web technologies through practical exercises, building real-world projects and guidance.",
//     },
// ]


const Services = ({ servicesRef }) => {
    return (
        <div ref={servicesRef} id="services" className="bg-blackone">
            <div className="px-7 pt-12 md:pt-16 md:px-10 lg:px-24 lg:pt-20 xl:px-44" data-aos="fade-up">
                <div className="pb-4 xl:pb-10">
                    {Heading.map((data) => (
                        <div key={data.id} className="font-bold">
                            <h2 className="text-3xl text-white sm:text-4xl"> {data.fheading}</h2>
                        </div>
                    ))}
                </div>
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 col-span-2 pl-0 md:pl-10"> */}
                <div className="">
                    <div className="grid grid-cols-1 justify-center items-center gap-10 lg:grid-cols-2 lg:gap-10 lg:flex lg:justify-between">
                        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 justify-between">
                            {Details.map((offer) => (
                                <div key={offer.id} className="px-6 py-6 border-2 border-blacktwo bg-blacktwo shadow-xl rounded-xl text-white xl:px-10 xl:py-10">
                                    <h3 className="text-2xl font-bold mb-3 text-milkey">{offer.heading}</h3>
                                    <p>{offer.information}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Services;
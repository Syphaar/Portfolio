import PropTypes from "prop-types"; // Import prop-types

const Heading = [
    {id: 1, fheading:"Services"},
]

const Details = [
    {
        id: 1,
        heading: "Front-end development",
        information: "I specialize in turning designs into responsive, interactive web applications using React.js. With a focus on usability, accessibility, and cross-browser compatibility, I ensure a seamless experience across all devices. I prioritize collaboration and problem-solving to create digital products that are both visually compelling and high-performing.",
    },
    {
        id: 2,
        heading: "Performance and Optimization",
        information: "Speed impacts user experience, so I focus on optimizing frontend performance with best practices like lazy loadingnd smooth animations. My goal is to create fast, responsive, and seamless digital experiences that drive engagement and business success. I stay updated on modern web performance strategies to deliver high-speed, efficient applications that keep users engaged.",
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
};

// Define prop types
Services.propTypes = {
    servicesRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};
 
export default Services;
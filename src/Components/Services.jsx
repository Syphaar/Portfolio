const Heading = [
    {id: 1, fheading:"Services", number:"03. "},
]


const Details = [
    {
        id: 1,
        heading: "Front-end development",
        information: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, maxime quis. Vitae reiciendis, accusamus voluptatem, nesciunt eveniet beatae, dolores aperiam explicabo excepturi eaque nostrum quaerat cumque culpa iste. Unde, Placeat, maxime quis. Vitae reiciendis, accusamus voluptatem, nesciunt eveniet beatae, dolores quia?",
    },
    {
        id: 2,
        heading: "Performance and Optimization",
        information: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, maxime quis. Vitae reiciendis, accusamus voluptatem, nesciunt eveniet beatae, dolores aperiam explicabo excepturi eaque nostrum quaerat cumque culpa iste. Unde, Placeat, maxime quis. Vitae reiciendis, accusamus voluptatem, nesciunt eveniet beatae, dolores quia?",
    },
    // {
    //     id: 3,
    //     heading: "Front and development",
    //     information: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, maxime quis. Vitae reiciendis, accusamus voluptatem, nesciunt eveniet beatae, dolores aperiam explicabo excepturi eaque nostrum quaerat cumque culpa iste. Unde, quia?",
    // },
]


const Services = () => {
    return (
        <div className="bg-bluee">
            <div className="px-7 pt-12 md:pt-16 md:px-10 lg:pt-20" data-aos="fafe">
                <div className="pb-4 xl:pb-10">
                    {Heading.map((data) => (
                        <div key={data.id} className="text-center">
                            <h2 className="text-3xl text-white"><span className="text-silver">{data.number}</span> {data.fheading}</h2>
                        </div>
                    ))}
                </div>
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 col-span-2 pl-0 md:pl-10"> */}
                <div>
                    <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 justify-between">
                        {Details.map((offer) => (
                            <div key={offer.id} className="px-6 py-6 border-2 rounded-xl text-white xl:px-10 xl:py-10">
                                <h3 className="text-2xl font-bold mb-3 text-silver">{offer.heading}</h3>
                                <p>{offer.information}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Services;
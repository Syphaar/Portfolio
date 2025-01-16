const Heading = [
    {id: 1, fheading:"Contact", number:"05. "},
]

const ContactInfo = [
    {
        id: 1,
        info: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    }
]

const ContactInfo2 = [
    {
        id: 1,
        info: "What is the major... Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.",
    }
]

const Contact = () => {
    return (
        <div>
            <div className="px-7 pt-20 md:px-10">
                <div className="pb-4 xl:pb-10">
                    {Heading.map((data) => (
                        <div key={data.id} className="text-center">
                            <h2 className="text-2xl"><span>{data.number}</span> {data.fheading}</h2>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="">
                        <div className="bg-slate-500 text-center px-4 py-4">
                            <form action="">
                                <div className="pb-3">
                                    <div className="pb-3 md:pb-0">
                                        <input type="text" name="name " placeholder="Full Name" className="w-[60%] px-5" required />
                                    </div>
                                    <div>
                                        <input type="email" name="email" placeholder="Enter Your Email" required />
                                    </div>
                                </div>
                                <div className="pb-3">
                                    <textarea name="textarea" required></textarea>
                                </div>
                                <div>
                                    <input type="submit" value="Send Message" className="bg-red-900" />
                                </div>
                            </form>
                        </div>
                        <div>
                            <div>
                                {ContactInfo.map((msg) => (
                                    <div key={msg.id}>
                                        <p>{msg.info}</p>
                                    </div>
                                ))}
                            </div>
                            <div>
                                {ContactInfo2.map((msg2) => (
                                    <div key={msg2.id}>
                                        <p>{msg2.info}</p>
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
 
export default Contact;
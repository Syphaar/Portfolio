import { useState } from "react";


const Navbar = () => {
    let Links = [
        {lname:"Home", link:"/", number:"01. "},
        {lname:"About", link:"/", number:"02. "},
        {lname:"Services", link:"/", number:"03. "},
        {lname:"Projects", link:"/", number:"04. "},
        {lname:"Contact", link:"/", number:"05. "},
    ]

    let [open, setOpen] = useState(false);

    return (
        <div className="shadow-md w-full sticky top-0 left-0">
            <div className="md:flex items-center justify-between bg-bluee py-4 px-7 md:px-10">
                <div className="font-bold text-2xl cursor-pointer flex items-center text-white">
                    {/* <a href=""> */}
                        <span className="text-3xl text-silver mr-1 pt-2">
                            <ion-icon name="logo-ionic"></ion-icon>
                        </span>
                        Sifon Emmanuel
                    {/* </a> */}
                </div>
                <div onClick={() => setOpen(!open)} className="text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden">
                    <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 text-center bg-bluee transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
                    {Links.map((link) => (
                            <li key={link.lname} className="md:ml-1 lg:ml-8 text-xl md:my-0 my-7">
                                <a href={link.link} className="text-white hover:text-silver duration-500"><span className="text-silver">{link.number}</span>{link.lname}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;
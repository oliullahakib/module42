import React,{useState} from 'react';
import { TableOfContents,X } from 'lucide-react';
const Navbar = () => {
    const [toggol, setToggol] = useState(false)
    return (
        <div className='bg-blue-200  p-3 flex justify-between'>
            <div className="start flex gap-2 items-center ">
                <span onClick={()=>setToggol(!toggol)} >
                   <span className={`${toggol&&"hidden"} lg:hidden`}> <TableOfContents /></span>
                   <span className={`${toggol||"hidden"}`}><X/></span>

                </span>
                <ul className={`absolute bg-amber-300 p-2 rounded-xl duration-1000 top-12 ${toggol?"left-1":"-left-24"} gap-8 `}>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contuct</a></li>∆
                </ul>
                <span className='logo text-2xl'>ReChart</span>
            </div>
            <div className="end">
                <ul className='lg:flex gap-8 hidden'>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contuct</a></li>
                </ul>
            </div>
            <button className='btn btn-primary'>Join Us</button>
        </div>
    );
};

export default Navbar;
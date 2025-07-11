import React, { useState } from 'react'
import pic from "/profile pic.jpg"
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import {Link} from "react-scroll"

function Nevbar() {
    const [menu, setMenu]=useState(false);
    const navItem=[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Portfolio"
        },
        {
            id:4,
            text:"Experience"
        },
        {
            id:5,
            text:"Contact"
        },
    ]
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white'>
                <div className='flex justify-between items-center h-16'>
                    <div className="flex space-x-2">
                        <img src={pic} className="h-12 w-12 rounded-full" alt="" />
                        <h1><span className='text-green-600'>K</span>amla <span className='text-green-600'>B</span>haria
                            <p className='text-sm'>Web Developer</p>
                        </h1>
                    </div>
                    {/* desktop navbar */}
                    <div>
                        <ul className='hidden md:flex space-x-8'>
                           {
                            navItem.map(({id,text}) =>(
                               <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                                <Link to={text}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass='active'>
                                    {text}
                                </Link>
                               </li>
                            ))
                           }
                        </ul>
                        <div onClick={() => setMenu(!menu)} className='md:hidden'>
                            {menu ? <IoClose size={24}/> : <TiThMenu size={24}/>}</div>
                    </div>
                </div>

                {/* Mobile navbar */}
                {
                    menu &&(
                        <div className='bg-white'>
                        <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-4'>
                        {
                            navItem.map(({id,text}) =>(
                               <li className='hover:scale-105 duration-200 font-semibold cursor-pointer text-xl' key={id}>
                                <Link 
                                onClick={() => setMenu(!menu)}
                                to={text}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass='active'>
                                    {text}
                                </Link>
                                </li>
                            ))
                           }
                                </ul>
                        </div>
                    )
                }
               
            </div>
               

        </>

    );
}

export default Nevbar

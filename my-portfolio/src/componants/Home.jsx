import React from 'react'

import pic from "/profile pic.jpg"

import { FaFacebookSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const Home = () => {
    return (
        <>
            <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 w-full mt-12 md:mt-24 space-y-2 order-2 md:order-1 text-center md:text-left'>
                        <span>Welcome to my space</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Hello, I'm a</h1>
                            {/* <span className='text-red-700 font-bold'>Developer</span> */}
                            <ReactTyped
                                className='text-red-700 font-bold'
                                strings={["Developer", "Programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className='text-sm md:text-md text-justify'>I'm a passionate MERN Stack Developer skilled in building dynamic, responsive web
                            applications using MongoDB, Express.js, React, and Node.js. My portfolio showcases real-world projects, clean code practices,
                            and a commitment to performance and user experience.
                            I'm eager to solve problems and build impactful digital solutions.</p>
                        <br />

                        {/* Social media icons */}
                        <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                            <div className='space-y-2'>
                                <h1 className='font-bold '>Available On</h1>

                                <ul className='flex space-x-5'>
                                    <li>
                                        <a href="https://www.facebook.com/kumar.bharia.3"
                                            target="_blank">
                                            <FaFacebookSquare className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/kamla-kumari" target="_blank">
                                            <FaLinkedin className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/@kidsschool330" target="_blank">
                                            <BsYoutube className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"><BsTelegram className='text-2xl cursor-pointer' /></a>
                                    </li>
                                </ul>

                            </div>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Currently Working On</h1>

                                <div className='flex space-x-5'>
                                    <SiMongodb className='text-xl md:3xl hover:scale-110 duration-200 rounded-full border-[1px]' />
                                    < SiExpress className='text-xl md:3xl hover:scale-110 duration-200 rounded-full border-[1px]' />
                                    < FaReact className='text-xl md:3xl hover:scale-110 duration-200 rounded-full border-[1px]' />
                                    <FaNode className='text-xl md:3xl hover:scale-110 duration-200 rounded-full border-[1px]' />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 w-full flex justify-center mt-8 md:mt-20 order-1'>
                        <img src={pic} className='rounded-full h-[300px] w-[300px] md:h-[450px] md:w-[450px]' alt="" />
                    </div>
                </div>

            </div>

            <hr />
        </>
    )
}

export default Home

import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <hr />
            <footer className='py-12'>
                <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex space-x-4'>
                            <FaFacebookSquare size={24} />
                            <FaLinkedin size={24} />
                            <BsYoutube size={24} />
                            <FaTwitter size={24} />
                        </div>
                        <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                            <p className='text-sm'>
                                &copy; 2025 Yours Company. All Rights Reserved.
                            </p>
                            <p className='text-sm'> Supportive Partner <span className='text-red-700'>❤ </span>Kamla   </p>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer

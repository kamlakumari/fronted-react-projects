import React from 'react'
import js from "../../public/js-img.png"
import mongo from "../../public/mongo.jpeg"
import node from "../../public/node.png"
import react from "../../public/react.png"
import express from "../../public/express.jpeg"
import cpp from "../../public/cpp.png"
import c from "../../public/c.jpeg"


const Portfolio = () => {
    const cardItem = [
        {
            id:1,
            logo: js,
            name: "Javascript"
        },
        {
            id:2,
            logo: mongo,
            name: "MongoDB"
        },
        {
            id:3,
            logo: react,
            name: "ReactJs"
        },
        {
            id:4,
            logo: node,
            name:"nodeJs" 
        },
        {
            id:5,
            logo: cpp,
            name:"CPP"
        },
        {
            id:6,
            logo: c,
            name: "C"
        },
        {
            id:7,
            logo: express,
            name: "Express"
        },
       
    ]
  return (
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
     <div>
        <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
        <span className='underline font-semibold'>Featured Projects</span>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-5'>
            {
                cardItem.map(({id,logo,name}) => (
                    <div key={id} className='md:w-[300px] md:h-[300px] border-[1px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300'>
                     <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
                     <div>
                     <div className='px-2 font-bold text-xl mb-1'>{name}</div>
                     <p className='px-2 text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                         </p>
                     </div>
                     <div className='px-6 py-4 space-x-3 justify-around'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded '>Video</button>
                        <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded '>Source Code</button>
                     </div>
                     
                    </div>
                    ))
            }
            
        </div>
     </div>
    </div>
  )
}

export default Portfolio

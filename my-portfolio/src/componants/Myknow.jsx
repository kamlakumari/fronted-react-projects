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
    <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
     <div>
        <h1 className='text-3xl font-bold mb-5'>Experience</h1>
       <p className=''>
       I have 1 year of hands-on experience building dynamic
       </p>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
            {
                cardItem.map(({id,logo,name}) => (
                    <div key={id} className='flex flex-col items-center justify-center border-[1px] rounded-full md:h-[200px] md:w-[200px] p-1 cursor-pointer hover:scale-110 duration-300'>
                     <img src={logo} className='w-[150px]   rounded-full' alt="" />
                     <div>
                     <div className=''>{name}</div>
                   
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


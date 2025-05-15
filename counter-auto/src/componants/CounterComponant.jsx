
import React, { useEffect, useState } from 'react'

const CounterComponant = () => {
    const [count , setCount] = useState(10);
    useEffect(()=>{
       if(count >0){
        const timer = setTimeout(() => {
            setCount(count-1); 
        }, 1000);
        return () => clearTimeout(timer);
       }
    },[count]);

  return (
    <div className='bg-gray-900 h-screen flex justify-center items-center '>
      {
        count >0 ?<div className='text-white text-7xl'>counter : { count }</div>: <div className='text-white text-5xl'> Happy Birthday 🥳🎈  </div>
      }
    </div>
  )
}

export default CounterComponant


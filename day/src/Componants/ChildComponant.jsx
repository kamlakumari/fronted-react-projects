import React from 'react'

const ChildComponant = ({count , setCount}) => {
  return (
    <>
      <div className='m-8 flex flex-col gap-8'>
       <button className='bg-blue-300 p-3' onClick={() => setCount(count +1)}>
        +
       </button>

       <button className='bg-pink-300 p-3' onClick={() => setCount(count -1)}>
        -
       </button>
      </div>
    </>
  )
}

export default ChildComponant

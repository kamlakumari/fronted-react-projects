import React from 'react'
// import { target } from './../../day01/node_modules/enhanced-resolve/lib/util/entrypoints';

export const App = () => {
// const HandleChange=(e)=>{
//   console.log("Input tag is Touched !!!!!! ",
//     e.target.value );
// }
 
  return (
< >  
<div className='bg-gray-900  w-89 justify-center  ml-[450px] mt-[150px] border-blue-900'>
<div className="flex flex-col items-center justify-center h-[250px]  bg-gray-200  border-blue-800 ">
      <label className="mb-1 text-lg font-semibold text-gray-700" htmlFor="name">
        Enter Your Details:
      </label>
      <input
        type="text"
        id="name"
        autoFocus
        required
        onChange={(e) => {
          console.log(`Input tag is Touched !!!!!! ${e.target.value}, ${e.target.name}`);
        }}
        placeholder="Type here..."
        className="w-80 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
      />
       <input
        type="email"
        id="name"
       required
        
        placeholder="Type here..."
        className="w-80 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mt-[30px]"
      />


          <div className="flex items-center justify-center  bg-gray-100">
      <button className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300 mt-3 cursor-pointer hover:**:">
        Add To Cart
      </button>
    </div>
    </div>



  </div> 


</>
 
    
  )


}

export default App
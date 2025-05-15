import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [ans, setAns] = useState(undefined);

  const handleSubmit = (e) => {
    e.preventDefault();
    const numA = parseInt(a, 10);
    const numB = parseInt(b, 10);

    if (!isNaN(numA) && !isNaN(numB)) {
      setAns(numA + numB);
    } else {
      setAns("Invalid input");
    }
    
    setA("");
    setB("");
  };

  useEffect(() => {
    console.log(ans);
  }, [ans]); // Logs updated answer

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='flex justify-center items-center h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500'>
          <div className='h-[400px] w-[350px] rounded-2xl border-2 bg-white shadow-lg'>
            <div className='flex flex-col items-center p-6 gap-5'>
              <h1 className='text-2xl font-bold text-gray-800'>Enter Details</h1>
              <input
                type='number'
                placeholder='Enter a number'
                className='h-[50px] w-[300px] p-4 rounded-2xl border-2 text-xl mt-9'
                name='a'
                value={a}
                required
                autoFocus
                onChange={(e) => setA(e.target.value)}
              />
              <input
                type='number'
                placeholder='Enter a number'
                className='h-[50px] w-[300px] p-4 rounded-2xl border-2 text-xl'
                name='b'
                value={b}
                required
                onChange={(e) => setB(e.target.value)}
              />
              <button
                type='submit'
                className='border-2 rounded-2xl w-[300px] h-[40px] bg-blue-500 text-white hover:bg-blue-600 transition mt-8'>
                Submit
              </button>
              <h1 className='text-black text-xl'>
                {ans !== undefined ? `Result = ${ans}` : ""}
              </h1>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;

import React, { useState } from 'react';

const Bulb = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleBulb = () => setIsOn(prev => !prev);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-9xl mb-4">
        {isOn ? '💡' : '💤'} {/* Or use custom bulb image here */}
      </div>
      <h2 className="text-2xl font-bold mb-2">
        Light is {isOn ? 'ON' : 'OFF'}
      </h2>
      <button
        onClick={toggleBulb}
        className={`px-6 py-2 rounded-md ${isOn ? 'bg-yellow-500' : 'bg-gray-500'} text-white`}
      >
        Toggle Bulb
      </button>
    </div>
  );
};

export default Bulb;
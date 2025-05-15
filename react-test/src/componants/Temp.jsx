import React , { useState } from "react";

const Temp = () => {
  const [inputTemp, setInputTemp] = useState("");
  const [unit, setUnit] = useState("Celsius");
  const [convertedTemp, setConvertedTemp] = useState(null);
  const [error, setError] = useState("");

  const handleConvert = () => {
    if (inputTemp === "" || isNaN(inputTemp)) {
      setError("Please enter a valid numeric value.");
      setConvertedTemp(null);
      return;
    }

    setError("");

    const temp = parseFloat(inputTemp);
  let result;

  if (unit === "Celsius") {
    result = (temp * 9) / 5 + 32;
    setConvertedTemp(`${result.toFixed(2)} °F`);
  } else {
    result = ((temp - 32) * 5) / 9;
    setConvertedTemp(`${result.toFixed(2)} °C`);
  }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Temperature Converter</h2>

      <input
        type="text"
        value={inputTemp}
        onChange={(e) => setInputTemp(e.target.value)}
        placeholder="Enter temperature"
        className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <select
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        className="w-full mb-4 p-3 border rounded-md bg-white"
      >
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
      </select>

      <button
        onClick={handleConvert}
        className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 font-semibold"
      >
        Convert
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {convertedTemp && !error && (
        <div className="mt-6">
          <h3 className="text-xl text-gray-700 font-medium">
            Converted Temperature: <span className="font-bold">{convertedTemp}</span>
          </h3>
        </div>
      )}
    </div>
  );
};

export default Temp;
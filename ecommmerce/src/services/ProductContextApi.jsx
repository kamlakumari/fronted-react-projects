import React, { createContext, useEffect, useState } from 'react'

const ProductContext = createContext();
const ProductProvider = ({children}) => {
    const [Products, setproducts] = useState([]);
    useEffect(
        ()=>{
            async function getP() {
                const tch = 'https://gist.githubusercontent.com/kamlakumari/bedf278c09c7980aa1bd06086a1af72a/raw/026417f5f16fba067cff31b118449645d6606e49/productdata.json'
                try {
                    const response = await fetch(tch);
                    if (response.ok) {
                        const data = await response.json(); 
                        setproducts(data)
                        console.log(data);
                    } else {
                        throw new Error('Failed to fetch data');
                    }
                } catch (error) {
                    console.error('Error:', error); 
                }
            }
            getP()
        },[]
    )
  return (
    <ProductContext.Provider value={Products}>
        {children}
    </ProductContext.Provider>
  );
}

export { ProductProvider, ProductContext };

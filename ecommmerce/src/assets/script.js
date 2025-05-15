// fetch('https://gist.githubusercontent.com/kamlakumari/bedf278c09c7980aa1bd06086a1af72a/raw/026417f5f16fba067cff31b118449645d6606e49/productdata.json')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));

    async function getP() {
        const tch = 'https://gist.githubusercontent.com/kamlakumari/bedf278c09c7980aa1bd06086a1af72a/raw/026417f5f16fba067cff31b118449645d6606e49/productdata.json'
        try {
            const response = await fetch(tch);
            if (response.ok) {
                const data = await response.json(); 
                console.log(data);
            } else {
                throw new Error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error:', error); 
        }
    }
    getP()
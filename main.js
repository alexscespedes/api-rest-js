const URL = 'https://api.thecatapi.com/v1/images/search?limit=5&api_key=live_eUG5kBaW9Zax1TFTuSkshtUaSL7MVGl2VWWWCYDYIkbooD492jj74V59dEHWya3Y';

// fetch(URL)
//     .then(response => response.json())
//     .then(data => {
//         const img = document.querySelector('img')
//         img.src = data[0].url;
//     });

// RETO COMPLETADO!!!

const button = document.querySelector('#btn')

button.addEventListener("click", obtenerImagenDesdeURL)

    async function obtenerImagenDesdeURL() {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            console.log(data);
            const img1 = document.getElementById('img1');
            img1.src = data[0].url;
            const img2 = document.getElementById('img2');
            img2.src = data[1].url;
            const img3 = document.getElementById('img3');
            img3.src = data[2].url;
        } catch (error) {
            console.error('Error al obtener y mostrar la imagen:', error);
        }
    }

obtenerImagenDesdeURL()
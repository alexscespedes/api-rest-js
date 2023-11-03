const URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_eUG5kBaW9Zax1TFTuSkshtUaSL7MVGl2VWWWCYDYIkbooD492jj74V59dEHWya3Y';

const URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_eUG5kBaW9Zax1TFTuSkshtUaSL7MVGl2VWWWCYDYIkbooD492jj74V59dEHWya3Y';


// fetch(URL)
//     .then(response => response.json())
//     .then(data => {
//         const img = document.querySelector('img')
//         img.src = data[0].url;
//     });

// RETO COMPLETADO!!!

const button = document.querySelector('#btn')
const spanError = document.getElementById('error')

    async function loadRandomCats() {
        try {
            const response = await fetch(URL_RANDOM);
            const data = await response.json();
            console.log(data);
            console.log("Random")
            const img1 = document.getElementById('img1');
            img1.src = data[0].url;
            const img2 = document.getElementById('img2');
            img2.src = data[1].url;
        } catch (error) {
            console.error('Error al obtener y mostrar la imagen:', error);
            spanError.innerHTML = 'Hubo un error al cargar las imagenes';
        }
    }

    

    async function loadFavoritesCats() {
        try {
            const response = await fetch(URL_FAVORITES);
            const data = await response.json();
            console.log(data);
            console.log("Favorites")


        } catch (error) {
            console.error('Error al obtener y mostrar la imagen:', error);
            spanError.innerHTML = 'Hubo un error al cargar las imagenes';
        }
    }


    loadRandomCats()
    loadFavoritesCats()
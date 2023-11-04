const URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_eUG5kBaW9Zax1TFTuSkshtUaSL7MVGl2VWWWCYDYIkbooD492jj74V59dEHWya3Y';

const URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?api_key=live_eUG5kBaW9Zax1TFTuSkshtUaSL7MVGl2VWWWCYDYIkbooD492jj74V59dEHWya3Y';
const URL_DELETE_FAVORITES = (id) => `https://api.thecatapi.com/v1/favourites/${id}?api_key=live_eUG5kBaW9Zax1TFTuSkshtUaSL7MVGl2VWWWCYDYIkbooD492jj74V59dEHWya3Y`;


const spanError = document.getElementById('error')

    async function loadRandomCats() {
        try {
            const response = await fetch(URL_RANDOM);
            const data = await response.json();
            console.log(data);
            console.log("Random")
            const img1 = document.getElementById('img1');
            const img2 = document.getElementById('img2');
            const btn1 = document.getElementById('btn1');
            const btn2 = document.getElementById('btn2');
            

            img1.src = data[0].url;
            img2.src = data[1].url;
            btn1.addEventListener('click', () => {
                saveFavoriteCats(data[0].id);
            })

            btn2.addEventListener('click', () => {
                saveFavoriteCats(data[1].id);
            })





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
            const section = document.getElementById('favoriteCats');
            section.innerHTML = "";

            const h2 = document.createElement('h2');
            const h2Text = document.createTextNode('Michis favoritos');
            h2.appendChild(h2Text);
            section.appendChild(h2);

            data.forEach(element => {
                
                const article = document.createElement('article');
                const img = document.createElement('img');
                const btn = document.createElement('button');
                const btnText = document.createTextNode('Remove cat from favorites');

                img.src = element.image.url;
                img.width = 200;
                btn.appendChild(btnText);
                btn.addEventListener('click', () => {
                    deleteFavoriteCats(element.id);
                })
                article.appendChild(img);
                article.appendChild(btn);
                section.appendChild(article);

            });


        } catch (error) {
            console.error('Error al obtener y mostrar la imagen:', error);
            spanError.innerHTML = 'Hubo un error al cargar las imagenes';
        }
    }

    async function saveFavoriteCats(id) {
        try {
            const response = await fetch(URL_FAVORITES, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    image_id: id
                }),
            });
            const data = await response.json();
            console.log(data);
            console.log("Cat successfully saved")
            loadFavoritesCats()


        } catch (error) {
            console.error('Error al guardar la imagen:', error);
            spanError.innerHTML = 'Hubo un error al guardar la imagen';
        }
    }

    async function deleteFavoriteCats(id) {
        try {
            const response = await fetch(URL_DELETE_FAVORITES(id), {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            console.log(data);
            console.log("Cat successfully removed")
            await loadFavoritesCats()


        } catch (error) {
            console.error('Error al guardar la imagen:', error);
            spanError.innerHTML = 'Hubo un error al guardar la imagen';
        }
    }



    loadRandomCats()
    loadFavoritesCats()
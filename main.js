

//CAT FACTS

// fetch('https://catfact.ninja/fact')
//     .then(response => response.json)
//     .then(response => {
//         document.querySelector('.name').innerText = response.name
//         document.querySelector('.description').innerText = response.description
//     })


//star wars

fetch('https://swapi.dev/api/films')

    .then(response => response.json())
    .then(response => {
        response.results.forEach(film => {
            let planetBox = document.createElement('div')
            document.querySelector('body').appendChild(planetBox)
            let planetList = document.createElement('article')
            planetBox.appendChild(planetList)

            film.planets.forEach(planet => {
                fetch(planet)
                    .then(response => response.json())
                    .then(planets => {
                        let planetElem = document.createElement('h1')
                        let planetGrav = document.createElement('h3')
                        planetElem.innerText = `Planet Name:${planets.name}`
                        planetGrav.innerText = `Gravity:${planets.gravity}`
                        planetList.appendChild(planetElem)
                        planetList.appendChild(planetGrav)

                    })
                    //residents.forEach()
                    .catch(err => console.log('Error page', err))

                //estaba probando
                planets.residents.forEach(resident => {
                    fetch(resident)
                        .then(response => response.json())
                        .then(residents => {
                            let capResi = document.createElement('p')
                            capResi.innerText = `Residents:${planets.residents}`
                            planetList.appendChild(capResi)
                        })

                })
            })

        })
    })
    .catch(err => console.log('Error de informacion', err))



async function getSome() {
    const randy_beer = await( await fetch('https://api.punkapi.com/v2/beers/random') ).json();
    const person     = await( await fetch(`https://swapi.co/api/people/${randy_beer[0].ibu}/`) ).json();

    return person;
}

getSome()
    .then(data => console.log(data))
    .catch(reason => console.log(reason.message))
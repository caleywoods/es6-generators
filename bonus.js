/*
  In this stupid example we're getting 10 planets from the Star Wars universe
  and taking their orbital periods into an array and then casting them into 
  numbers to use as mock ID's for a SQL delete statement.

  Kind of an inside joke.
*/
function* ribbit() {
  planets = yield gimme( 'https://swapi.co/api/planets/' );

  planets.results
    .map( planet => parseInt(planet.orbital_period) )
    .map( generateStatement );
}

function generateStatement( id ) {
  console.log( `DELETE * FROM PLANETS WHERE ID = ${id}` );
}

function gimme( earl ) {
  fetch( earl )
    .then( response => response.json() )
    .then( data => toad.next(data) )
}

const toad = ribbit();

/* manually call this once to kick it off */
toad.next();
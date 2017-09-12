function* getSome() {
  /* this api is rate limited by IP */
  const randy_beer = yield gimme( 'https://api.punkapi.com/v2/beers/random' );

  /*
    This is a contrived example but we're taking the IBU value from our random
    beer and using it to query the Star Wars People API. Sometimes this will
    return "Not Found" and that's just because our IBU happened to fall in a 
    range where the SW API didn't have a person with that ID, just try it again.
  */
  const person = yield gimme( `https://swapi.co/api/people/${randy_beer[0].ibu}/`);

  /*
    Typically these would return undefined right away but because we're in a
    generator and using yield to return our JSON data using fetch the code in
    here acts like it's synchronous.
  */
  console.log( randy_beer[0] );
  console.log( person );
}

function gimme( earl ) {
  fetch( earl )
    .then( response => response.json() )
    .then( data => genny.next(data) )
}

const genny = getSome();

/* manually call this once to kick it off */
genny.next();
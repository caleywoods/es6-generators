# es6-generators

Simple example showing the use of a generator function to wait on some ajax
calls to return.

This contrived example makes a call to a beer API to get a random beer and then
uses the [IBU](https://en.wikipedia.org/wiki/Beer_measurement#Bitterness) of the
beer to go fetch a random person from the Star Wars universe by passing the IBU
value in as the ID of the random person to the [Star Wars API](https://swapi.co/).

Open `index.html` and look at the console to see the result, the page shows
no data. If you want to try the async/await example then uncomment its line in
`index.html`.
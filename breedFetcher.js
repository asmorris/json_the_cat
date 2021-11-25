const request = require("request");
const catBreed = process.argv[2];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`,
  (error, response, body) => {
    if (error) return console.log("error:", error);

    if (response.statusCode !== 200) {
      return console.log(
        `Response failed with code ${response.statusCode}. Terminating.`
      );
    }
    if (!body) return console.log("Unable to receive response");
    const data = JSON.parse(body)[0];
    if (data) {
      console.log(data.description);
    } else {
      console.log("No information found about this cat breed!");
    }
  }
);

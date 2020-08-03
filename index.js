// Heart of this script, we are using this module to send requests to the download link of our package.
const request = require("request");

// Resetting the counter since we are starting the script again.
var botted = 0;

// We will send 1 request to the download link every second and track how many we have sent.
setInterval(botter, 1000);

// A function I have made called botter which is called every second, this is where the magic happens :).
function botter() {
    request('https://registry.npmjs.org/sellix.io/-/sellix.io-0.0.4.tgz', function (error, respone) {
        if (error) return console.error(`An error has occured: ${error}.`);
        botted++
        console.log(`${botted} downloads have been added.`);
    })
}

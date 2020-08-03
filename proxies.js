const request = require("request");
const fs = require("fs");
const chalk = require("chalk")
const proxy = fs.readFileSync("./proxy.txt", "utf-8").split("\n");
const proxyAgent = require("proxy-agent");

var botted = 0;

setInterval(botter, 100);

function botter() {
    request({
        url: "https://registry.npmjs.org/sellix.io/-/sellix.io-0.0.4.tgz", method: "GET", agent: new proxyAgent(`http://${proxy[~~(Math.random() * proxy.length)]}`), headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 YaBrowser/19.7.3.172 Yowser/2.5 Safari/537.36",
        }
    }, (err, res, body) => {
        if (err) return;
        botted++
        process.title = `NPM Download Botter | ${botted} downloads added.`
        console.log(chalk.green(`[+1] download added`))
    })
}

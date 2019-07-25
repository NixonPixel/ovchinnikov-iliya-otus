const http = require('httphttp');
const port = 3000

const server = http.createServer((req, res) => {
    const delay = 1000;
    (function () {
        new Promise((resolve, reject) => {
            setTimeout(() => setTimeout(() => resolve(`Waiting... + ${delay} + ms`), delay))
        }).then((data) => {
            console.log(data);
            console.log(res.statusCode)
            res.write('<p>HI!!!</p>');
            res.end();
        })
    }());

})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})
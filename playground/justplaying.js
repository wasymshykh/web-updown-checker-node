const http = require("http");
const { StringDecoder } = require("string_decoder");

const port = 3000;

http.createServer((request, response) => {
    request.on("data", chunk => {
        const sd = new StringDecoder();
        console.log(sd.write(chunk));
    });

    request.on("end", () => {
        response.end("Thanks!");
    });
}).listen(port, () => {
    console.log(`Started at ${port}`);
});

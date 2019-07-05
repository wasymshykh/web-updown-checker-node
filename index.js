const http = require("http");
const { StringDecoder } = require("string_decoder");

const port = 3000;

http.createServer((request, response) => {
    const sd = new StringDecoder();

    let data = "";

    request.on("data", chunk => {
        data += sd.write(chunk);
    });

    request.on("end", () => {
        console.log(data);
        response.end("Thanks!");
    });
}).listen(port, () => {
    console.log(`Started at ${port}`);
});

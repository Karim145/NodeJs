const http = require("http");
const path = require("path");

const requestListener = function (req,res){
    res.writeHead(200);
    res.end("serverns namn: "+ path.basename(__filename) + "\n" + "Min IP-adress: "+req.connection.remoteAddress+"\n"+ "Porten: "+req.connection.remotePort+"\n"+"Metoden:" +req.method+"\n");
}
const server = http.createServer(requestListener);
server.listen(3000);

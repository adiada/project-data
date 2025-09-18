const jsonServer = require("json-server"); // importing json-server library
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors({ origin: "*" }));

const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);

server.listen(port);

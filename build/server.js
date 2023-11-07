"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    if (req.url === '/ping' && req.method === 'GET') {
        const headers = req.headers;
        const headersJSON = JSON.stringify(headers);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(headersJSON);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Erreur 404 Page non trouvé/inexistante');
    }
});
const port = 3000;
server.listen(port, () => {
    console.log(`Le serveur fonction sur le port ${port}`);
});

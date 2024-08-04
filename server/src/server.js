import app from './app.js';
import http from 'node:http';
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
server.listen(PORT, console.log(`Server is listening on ${PORT}`));

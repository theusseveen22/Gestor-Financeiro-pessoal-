const app = require('./Server.js');
const rotas = require('./Routers/index.js');

app.use('/', rotas);
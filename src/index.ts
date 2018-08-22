import server from './config/server';
import routes from './config/routes';
import './config/db';
import './config/cors';
import './config/views';

require('dotenv').config();

const PORT = process.env.PORT || 8080;

routes(server);

server.listen(PORT, () => {
  console.log('BACKEND RUNNING ON PORT', PORT);
});
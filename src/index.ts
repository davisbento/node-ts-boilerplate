import server from './config/server';
// import './config/db';

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log('BACKEND RUNNING ON PORT', PORT);
});

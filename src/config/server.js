import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import nunjucks from 'nunjucks';
import morgan from 'morgan';

require('babel-polyfill');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../app/public')));

nunjucks.configure(path.join(__dirname, '../app/views'), {
  autoescape: true,
  express: app,
});

app.set('view engine', 'njk');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log('BACKEND RUNNING ON PORT', PORT);
});


export default app;

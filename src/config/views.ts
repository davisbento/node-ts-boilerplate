import app from './server';
import path from 'path';
import nunjucks from 'nunjucks';

const viewsConfig = () => (
  nunjucks.configure(path.join(__dirname, '../app/views'), {
    autoescape: true,
    express: app,
  })
);

export default viewsConfig;
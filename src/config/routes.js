import homeController from '../controllers/home';
import newsController from '../controllers/news';

const routes = (server) => {
  server.use('/', homeController);
  server.use('/news', newsController);
};

export default routes;

import homeController from '../controllers/home';
import newsController from '../controllers/news';
import authController from '../controllers/auth';

const routes = (server: any) => {
  server.use('/', homeController);
  server.use('/news', newsController);
  server.use('/auth', authController);
};

export default routes;

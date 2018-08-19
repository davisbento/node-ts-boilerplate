import homeController from '../controllers/home';
import newsController from '../controllers/news';
import authController from '../controllers/auth';
import userController from '../controllers/user';

const routes = (server: any) => {
  server.use('/api/', homeController);
  server.use('/api/news', newsController);
  server.use('/api/auth', authController);
  server.use('/api/users', userController);
};

export default routes;

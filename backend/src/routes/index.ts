import {Router} from 'express';
import {uploadRoutes} from './uploadoRoutes';

const routes = Router();

routes.use('/data',uploadRoutes)

export { routes };

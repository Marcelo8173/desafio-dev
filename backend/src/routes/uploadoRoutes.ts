import {Router} from 'express';
import {UploadoController} from '../controllers/'

const uploadRoutes = Router();
const uploadoController = new UploadoController()


uploadRoutes.get('/import', uploadoController.list)

uploadRoutes.post('/import', uploadoController.create)


export {uploadRoutes};
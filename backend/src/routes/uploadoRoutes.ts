import {Router} from 'express';
import multer from 'multer'
import {UploadoController} from '../controllers/'

const uploadRoutes = Router();
const upoload = multer({
    dest: './tmp'
  })
  

uploadRoutes.post('/import',upoload.single('file'), (request,response) => {
    const uploadoController = new UploadoController()
    const {file} = request
    
    uploadoController.loadCategory(file)
})

export {uploadRoutes};
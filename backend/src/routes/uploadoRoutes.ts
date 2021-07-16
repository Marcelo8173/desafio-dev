import {Router} from 'express';
import {UploadoController} from '../controllers/'
import multer from 'multer'

const uploadRoutes = Router();
const uploadoController = new UploadoController()
const upoload = multer({
    dest: './tmp'
  })

uploadRoutes.get('/import', uploadoController.list)

uploadRoutes.post('/import',upoload.single('file'), async (request,response) => {
    const uploadoController = new UploadoController()
    const {file} = request

    const res = await uploadoController.create(file!)
    
    return response.status(200).json(res)
})


export {uploadRoutes};
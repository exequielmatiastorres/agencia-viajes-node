import express from 'express';
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales,
    paginaDetalleViaje,
} from '../controllers/paginasController.js'
import { guardarTestimonial } from '../controllers/testimonialController.js'


const router = express.Router();

router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje); //:name es una forma de hacer un comodin - lo que es cargar el mismo contenido pero modificar pequeñas partes.
router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);


export default router;

//DEBEMOS TENER UNA UNICA INSTANCIA DE NUESTRA APP
//formas de pasar variables en pug <!--formas de pasar variables = #{} -->
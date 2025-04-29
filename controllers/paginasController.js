import { Viaje } from '../models/Viaje.js'
import { Testimonial } from '../models/Testimoniales.js'


const paginaInicio = async (req, res) => {

    //Consultar 3 viajes del modelo

    const promiseDB = [];

    promiseDB.push(Viaje.findAll({ limit: 3 }));
    promiseDB.push(Testimonial.findAll({ limit: 3}));

    try {
        const resultado = await Promise.all( promiseDB)

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
        
    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros',
    });
}

const paginaViajes = async (req, res) => {
    //consultar DB
    const viajes = await Viaje.findAll(); //findAll busca todos.

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes,
    });
}

const paginaTestimoniales = async (req, res) => {
    try {
        //consultar el modelo de testimoniales
        const testimoniales = await Testimonial.findAll(); //reotrna un arreglo
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }
    
    
}

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    //console.log(req.params) //params se asocia al comodin
    const { slug } = req.params;
    
    try {
        const viaje = await Viaje.findOne({ where : { slug }})

        res.render('viaje', {
            pagina: 'Información viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}
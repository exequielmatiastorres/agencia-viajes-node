import { Testimonial } from '../models/Testimoniales.js'

const guardarTestimonial = async (req, res) => {
    //Validar..
    const { nombre, correo, mensaje } = req.body;

    const errores = [ ]

    if (nombre.trim() === '') {
        errores.push({mensaje: 'El nombre esta vacio'})
    }

    if (correo.trim() === '') {
        errores.push({mensaje: 'El Correo esta vacio'})
    }

    if (mensaje.trim() === '') {
        errores.push({mensaje: 'El mensaje esta vacio'})
    }

    if (errores.length > 0) {

        //Consultar testimoniales existentes

        const testimoniales = await Testimonial.findAll();
        
        //mostrar la vista con errores - 2 parametros - 1ro vista 2do información
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        }) 
    } else {
        //Almacenarlo en la base de datos
        
        try {
            await Testimonial.create({
                nombre, 
                correo, 
                mensaje
            });

            res.redirect('/Testimoniales') //envia al usuario a testimoniales
        } catch (error) {
            console.log(error)
        }


    }

}


export {
    guardarTestimonial,
}
// ENUMS -->  utiliza datos finitos controlables (dias de la semana, meses del año, estaciones del año, tipos de errores)
// Se recomienda usar CONST para generar menos codigo y depende de la utilizacion del mismo 
const enum ERROR_TYPES {
    NOT_FOUND = 'notFound',
    UNAUTHORIZED = 'unauthorized',
    FORBIDDEN = 'forbidden'
}

function mostrarMensaje (tipoDeError: ERROR_TYPES) {
    if (tipoDeError === ERROR_TYPES.NOT_FOUND){
        console.log('No se encuentra el recurso')
    } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
        console.log('No tienes permisos para acceder')
    } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
        console.log('No tienes permisos para acceder')
    }
}
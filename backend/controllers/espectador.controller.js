const Espectador = require('../models/espectador');
const espectadorCtrl = {};

/**
 * Permite dar de alta un espectador.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
espectadorCtrl.createEspectador = async (req, res) => {
    let espectador = new Espectador(req.body);
    try {
        await espectador.save();
        res.json({'status': '1', 'msg': 'Espectador saved.'})
    } catch (error) {
        console.log(error)
        res.status(400).json({'status': '0', 'msg': 'Error processing operation.'})
    }
}


/**
 * Permite recuperar todos los espectadores.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
espectadorCtrl.getEspectadores = async (req, res) => {
    let products = await Espectador.find();
    res.json(products);
}

/**
 * Permite obtener un espectador por el dni.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
espectadorCtrl.getEspectadorByDni = async (req, res) => {
    try {
        let filtro = req.params.dni;
        existEspectador(filtro).then(async (value) => {
            if (value) {
                res.status(404).json({
                    status: '0', msg: 'the viewer with the id does not exist.'
                });
            } else {
                try {
                    let find = await Espectador.find({dni: filtro});
                    res.json(find);
                } catch (error) {
                    res.status(400).json({'status': '0', 'msg': 'Error processing operation.'})
                }
            }
        }).catch((error) => {
            console.error('Failed to verify ID:', error);
        });
    } catch (error) {
        res.status(400).json({'status': '0', 'msg': 'Error processing operation.'})
    }
}

/**
 * Permite verificar si el DNI existe.
 * @param id
 * @returns {Promise<boolean>}
 */
async function existEspectador(dni) {
    try {
        const exist = await Espectador.exists({dni: dni});
        return !exist;
    } catch (error) {
        console.error('Failed to verify ID:', error);
        return false;
    }
}

module.exports = espectadorCtrl;
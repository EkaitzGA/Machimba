import pursesController from "./pursesController.js"

// GET /api/purses
async function getAllPurses(req, res) {
    try {
        const purses = await pursesController.getAll();
        res.status(200).json({
            status: 'success',
            data: purses
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error al obtener los bolsos',
            error: error.message
        });
    }
}

// GET /api/purses/:id
async function getPurseById(req, res) {
    try {
        const id = parseInt(req.params.id);
        const purse = await pursesController.getById(id);
        
        if (!purse) {
            return res.status(404).json({
                status: 'error',
                message: `No se encontró el bolso con id ${id}`
            });
        }

        res.status(200).json({
            status: 'success',
            data: purse
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error al obtener el bolso',
            error: error.message
        });
    }
}

export const functions ={
    getAllPurses,
    getPurseById
}

export default functions

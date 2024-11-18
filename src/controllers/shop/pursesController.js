import purseModel from "../../models/purseModel.js"


async function getAll(page=1){
    const limit = 12
    const offset = (page-1)*limit
    console.log("page",page);
    const purses = await purseModel.findAll({
        order: [
            ['name', 'ASC']
        ],
        limit:limit,
        offset: offset
    });
    return purses;
}

async function getById(id){
    const purse = await purseModel.findByPk(id);
    return purse;
}

//formularios de Busqueda

async function searchPurses(searchTerm) {
    try {
        const allPurses = await purseModel.findAll();
        const purses = allPurses.filter(purse => 
            purse.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return purses;
    } catch (error) {
        console.error('Error en búsqueda:', error);
        throw error;
    }
}


async function filterPurses(filterParams) {
    try {
        let whereClause = {};
        
        if (filterParams.collection) {
            whereClause.collection = filterParams.collection;
        }

        if (filterParams.color && filterParams.color !== '') {
            whereClause.color = filterParams.color;  
        }
        
        if (filterParams.material && filterParams.material !== '') {
            whereClause.material = filterParams.material;  
        }

        const purses = await purseModel.findAll({
            where: whereClause,
            order: [['name', 'ASC']]
        });
        return purses;
    } catch (error) {
        console.error('Error en filtrado:', error);
        throw error;
    }
}

export const functions ={
    getAll,
    getById,
    searchPurses,
    filterPurses
}
export default functions
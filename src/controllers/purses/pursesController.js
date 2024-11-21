import purseModel from "../../models/purseModel.js"
import error from "../../helpers/errors.js"


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
    if (!purses) {
        throw new error.FINDALL_EMPTY();
    }
    return purses;
}

async function getById(id){
    const purse = await purseModel.findByPk(id);
    if (!purse) {
        throw new error.PURSE_NOT_FOUND();
    }
    return purse;
}

//formularios de Busqueda

async function searchPurses(searchTerm) {
   
        const allPurses = await purseModel.findAll();
        const purses = allPurses.filter(purse => 
            purse.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (!purses) {
            throw new error.FINDALL_EMPTY();
        }
        return purses;
    
}


async function filterPurses(filterParams) {
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
        if (!purses) {
            throw new error.FINDALL_EMPTY();
        }
        return purses;
   
}

export const functions ={
    getAll,
    getById,
    searchPurses,
    filterPurses
}
export default functions
import adminUserModel from "../../models/adminUserModel.js";
import historyModel from "../../models/historyModel.js";
import purseModel from "../../models/purseModel.js"



async function showUsers(){
    const users = await adminUserModel.findAll()
    return users
}

async function showHistory(){
    const history = await historyModel.findAll()
    return history
}

//CRUD BOLSOS

//READ
async function showProducts(){
    const purses = await purseModel.findAll({
        order: [
            ['name', 'ASC']
        ]
    });
    return purses;
}

async function searchProducts(searchTerm) {
    try {
        const allPurses = await purseModel.findAll({
            order: [['name', 'ASC']]
        });
        
        const purses = allPurses.filter(purse => 
            purse.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        return purses;
    } catch (error) {
        console.error('Error en búsqueda:', error);
        throw error;
    }
}

async function getById(id){
    const purse = await purseModel.findByPk(id);
    const collections = purseModel.getAttributes().collection.values.map(value => ({
        value: value,
        name: value
    }));
    return { purse, collections };
}

//UPDATE
async function updatePurse(id, updatedData) {
    try {
        const purse = await purseModel.findByPk(id);
        if (!purse) {
            throw new Error('Bolso no encontrado');
        }
        await purse.update(updatedData);
        return purse;
    } catch (error) {
        console.error('Error en updatePurse:', error);
        throw error;
    }
}

//CREATE

async function createPurse(purseData) {
    try {
        const newPurse = await purseModel.create(purseData);
        return newPurse;
    } catch (error) {
        console.error('Error al crear el bolso:', error);
        throw error;
    }
}


//DELETE
async function deletePurse(id) {
    try {
        const purse = await purseModel.findByPk(id);
        if (!purse) {
            throw new Error('Bolso no encontrado');
        }
        await purse.destroy();
        return true;
    } catch (error) {
        console.error('Error al borrar el bolso:', error);
        throw error;
    }
}


export const functions ={
  
    showUsers,
    showProducts,
    searchProducts,
    showHistory,
    updatePurse,
    deletePurse,
    updatePurse,
    getById
}
export default functions

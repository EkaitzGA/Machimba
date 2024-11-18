import adminUserModel from "../../models/adminUserModel.js";
import adminClientModel from "../../models/adminClientModel.js";
import adminWorkerModel from "../../models/adminWorkerModel.js";
import historyModel from "../../models/historyModel.js";
import purseModel from "../../models/purseModel.js"

//Funciones USUARIO

async function showUsers(){
    const users = await adminUserModel.findAll()
    return users
}
async function showClients(){
    const clients = await adminClientModel.findAll()
    return clients
}
async function showWorkers(){
    const workers = await adminWorkerModel.findAll()
    return workers
}

async function showHistory(){
    const histories = await historyModel.findAll()
    return histories
}

async function getWorkerById(id){
    const worker = await adminWorkerModel.findByPk(id);
    
    return { worker };
}
//UPDATE
async function updateWorker(id, updatedData) {
    try {
        const worker = await adminWorkerModel.findByPk(id);
        if (!worker) {
            throw new Error('Trabajador no encontrado');
        }
        await worker.update(updatedData);
        return worker;
    } catch (error) {
        console.error('Error al actualizar:', error);
        throw error;
    }
}

//CREATE

async function createWorker(workerData) {
    try {
        const newWorker = await adminWorkerModel.create(workerData);
        return newWorker;
    } catch (error) {
        console.error('Error al crear el trabajador:', error);
        throw error;
    }
}


//DELETE
async function deleteWorker(id) {
    try {
        const worker = await adminWorkerModel.findByPk(id);
        if (!worker) {
            throw new Error('Trabajador no encontrado');
        }
        await worker.destroy();
        return true;
    } catch (error) {
        console.error('Error al borrar el trabajador:', error);
        throw error;
    }
}

//FUNCIONES PRODUCTO

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
    createPurse,
    getById,
    showClients,
    showWorkers,
    updateWorker,
    createWorker,
    deleteWorker,
    getWorkerById
}
export default functions

import userModel from "../../models/userModel.js";
import clientModel from "../../models/clientModel.js";
import workerModel from "../../models/workerModel.js";
import historyModel from "../../models/historyModel.js";
import purseModel from "../../models/purseModel.js"
import error from  "../../helpers/errors.js"


//Funciones USUARIO

async function showUsers(){
    const users = await userModel.findAll()
    return users
}
async function showClients(){
    const clients = await clientModel.findAll({
        include:userModel
    })
    return clients
}
async function showWorkers(){
    const workers = await workerModel.findAll({
        include: userModel
    });
    return workers
}

async function showHistory(){
    const histories = await historyModel.findAll()
    return histories
}

async function getWorkerById(worker_id){
    const worker = await workerModel.findByPk(worker_id,{
        include: userModel
    });
    if(!worker){
        throw new error.CLIENT_NOT_FOUND();
    }
    return worker;
}

async function getWorkertByEmail(email) {
    const worker = await workerModel.findOne({
        include: {
            model: userModel,
            where: {
                email: email
            }
        }
    })
    return worker;
}

//UPDATE
async function updateWorker(worker_id,user_name,password,email,first_name,last_name) {
    const worker = await workerModel.findByPk(worker_id);
    if(!worker){
        throw new error.CLIENT_NOT_FOUND();
    }
    const user = await userModel.findByPk(worker.user_id);
    if(!user){
        throw new error.CLIENT_NOT_FOUND();
    }
    user.user_name= user_name;
    user.password= password;
    user.email= email;
    user.first_name= first_name;
    user.last_name= last_name
    await worker.save()
    await user.save()
    return worker,user;
}


//CREATE

async function createWorker(workerData) {
    try {
    const newUser = await userModel.create({
    user_name: workerData.user_name,
    password: workerData.password, 
    email: workerData.email,
    first_name: workerData.first_name,
    last_name: workerData.last_name,
    register_date: workerData.register_date
    });
    
    const newWorker = await workerModel.create({
    user_id: newUser.user_id,
    });
    
    const response = {
    worker_id: newWorker.worker_id,
    user_id: newWorker.user_id,
    user: {
    user_name: newUser.user_name,
    email: newUser.email,
    first_name: newUser.first_name,
    last_name: newUser.last_name,
    register_date: newUser.register_date,
    },
    };
    
    return response;
    } catch (error) {
    console.error("Error al crear el trabajador:", error);
    throw error;
    }
    }


//DELETE
async function deleteWorker(id) {
    
        const worker = await workerModel.findByPk(id);
        if(!worker){
            throw new error.CLIENT_NOT_FOUND();
        }
        await worker.destroy();
        return true;
    }


//FUNCIONES PRODUCTO

//READ
async function showProducts(){
    const purses = await purseModel.findAll();
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
    getWorkerById,
    getWorkertByEmail
}
export default functions

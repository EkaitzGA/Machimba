import userModel from "../../models/userModel.js";
import clientModel from "../../models/clientModel.js";
import workerModel from "../../models/workerModel.js";
import historyModel from "../../models/historyModel.js";
import purseModel from "../../models/purseModel.js"
import error from  "../../helpers/errors.js"
import { Op } from "sequelize";

//Funciones USUARIO

async function showUsers(){
    const users = await userModel.findAll()
    if(!users){
        throw new error.FINDALL_EMPTY();}
    return users;
}
async function showClients(){
    const clients = await clientModel.findAll({
        include:userModel
    })
    if(!users){
        throw new error.FINDALL_EMPTY();}
    return cleanClientsByUser(clients);
}

function cleanClientsByUser(clients) {
    const cleanClients = [];
    for (const client of clients) {
        let cliente = cleanClients.find((e) => e.user_id == client.user_id)
        if (!cliente) {
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                };
            const formatedDate = new Date(client.user.register_date).toLocaleDateString('es-ES', options);
            cliente = {
                register_date: formatedDate,
                client_id: client.client_id,
                user_name: client.user.user_name,
                first_name: client.user.first_name,
                last_name: client.user.last_name,
                address: client.address,
                phone: client.phone,
                email: client.user.email,
                user_id: client.user_id
            }
            cleanClients.push(cliente);
        }
    }
    return cleanClients;
}

async function showWorkers(){
    const workers = await workerModel.findAll({
        include: userModel
    });
    if(!workers){
        throw new error.FINDALL_EMPTY();}
    return cleanWorkersByUser(workers);
}

function cleanWorkersByUser(workers) {
    const cleanWorkers = [];
    for (const worker of workers) {
        let trabajador = cleanWorkers.find((e) => e.user_id == worker.user_id)
        if (!trabajador) {
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                };
            const formatedDate = new Date(worker.user.register_date).toLocaleDateString('es-ES', options);
            trabajador = {
                register_date: formatedDate,
                worker_id: worker.worker_id,
                user_name: worker.user.user_name,
                first_name: worker.user.first_name,
                last_name: worker.user.last_name,
                address: worker.address,
                phone: worker.phone,
                email: worker.user.email,
                user_id: worker.user_id
            }
            cleanWorkers.push(trabajador);
        }
    }
    return cleanWorkers;
}


async function showHistory(){
    const history = await historyModel.findAll()
    if(!history){
        throw new error.FINDALL_EMPTY();}
    return cleanHistoryByPurchase(history);
}

function cleanHistoryByPurchase(history) {
    const purchases = [];
    for (const register of history) {
        let purchase = purchases.find((e) => e.purchase_id == register.purchase_id)
        if (!purchase) {
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                };
            const formatedDate = new Date(register.date).toLocaleDateString('es-ES', options);
            purchase = {
                client_id: register.client_id,
                purchase_id: register.purchase_id,
                date: formatedDate,
                status: register.status,
                products: []
            }
            purchases.push(purchase);
        }
        purchase.products.push(register);
    }
    console.log(purchases[0])
    return purchases;
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

async function getWorkerByEmail(email) {
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
    const newUser = await userModel.create({
    user_name: workerData.user_name,
    password: workerData.password, 
    email: workerData.email,
    first_name: workerData.first_name,
    last_name: workerData.last_name,
    register_date: workerData.register_date
    });
    if(!newUser){
        throw new error.CREATE_DOESNT_WORK();
    }
    
    const newWorker = await workerModel.create({
    user_id: newUser.user_id,
    });
    if(!newWorker){
        throw new error.CREATE_DOESNT_WORK();
    }
    
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
async function showProducts(page=1){
    const limit = 12
    const offset = (page-1)*limit
    const purses = await purseModel.findAll({
        limit:limit,
        offset: offset
    });
    if(!purses){
        throw new error.FINDALL_EMPTY();}
    return purses;
}

async function searchProducts(searchTerm) {
        const allPurses = await purseModel.findAll({
            order: [['name', 'ASC']]
        });
        if(!allPurses){
            throw new error.FINDALL_EMPTY();}
        const purses = allPurses.filter(purse => 
            purse.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        return purses;
}

async function searchProductsBy(query) {
    try {
        const purses = await purseModel.findAll({
            where: {
                [Op.or]: [{product_id: query}, {name: {
                    [Op.like]: `%${query}%`,
            }}]
            },
            order: [['name', 'ASC']]
        });
        return purses;
    } catch (error) {
        console.error('Error en búsqueda:', error);
        throw error;
    }
}

async function getById(id){
    const purse = await purseModel.findByPk(id);
    if (!purse) {
        throw new error.PURSE_NOT_FOUND();
    }
    const collections = purseModel.getAttributes().collection.values.map(value => ({
        value: value,
        name: value
    }));
    return { purse, collections };
}

//UPDATE
async function updatePurse(id, updatedData) {
        const purse = await purseModel.findByPk(id);
        if (!purse) {
            throw new error.PURSE_NOT_FOUND();
        }
        await purse.update(updatedData);
        return purse;
}

//CREATE

async function createPurse(purseData) {
        const newPurse = await purseModel.create(purseData);
        if(!newPurse){
            throw new error.CREATE_DOESNT_WORK();
        }
        return newPurse;
   
}


//DELETE
async function deletePurse(id) {
        const purse = await purseModel.findByPk(id);
        if (!purse) {
            throw new error.PURSE_NOT_FOUND();
        }
        await purse.destroy();
        return true;
   
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
    getWorkerByEmail,
    searchProductsBy
}
export default functions

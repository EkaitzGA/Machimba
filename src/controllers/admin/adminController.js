import userModel from "../../models/userModel.js";
import historyModel from "../../models/historyModel.js";
import purseModel from "../../models/purseModel.js"


async function showUsers(){
    const users = await userModel.findAll()
    return users
}

async function showProducts(){
    const purses = await purseModel.findAll({
        order: [
            ['name', 'ASC']
        ]
    });
    return purses;
}

async function updatePurseForm(id){
    const purse = await purseModel.findByPk(id);
    return purse;
}

async function showHistory(){
    const histories = await historyModel.findAll()
    return histories
}

//funciones updatePurse, deletePurse, createPurse
function createPurseForm(req, res){
}


//mirar
function createPurseSubmit(req, res){
    const {name, description, collection, price, color, material, image} = req.body;
    res.json(req.body)
}

//- name
//- description
//- collection
//- price
//- color 
//- material
//- image

function deletePurse(req, res){
    res.send("administrador borra bolso")
}


export const functions ={
  
    showUsers,
    showProducts,
    showHistory,
    deletePurse,
    createPurseForm,
    createPurseSubmit,
    updatePurseForm
}
export default functions

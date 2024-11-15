import adminUserModel from "../../models/adminUserModel.js";
import historyModel from "../../models/historyModel.js";


async function showUsers(){
    const users = await adminUserModel.findAll()
    return users
}

/* async function showProducts(){
    const products = /* await Me falta el modelo de los productos de Ines }*/


async function showHistory(){
    const history = await historyModel.findAll()
    return history
}

//funciones updatePurse, deletePurse, createPurse

function updatePurseForm(req, res){

}

function updatePurseSubmit(req, res){

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
    /* showProducts, */
    showHistory,
    deletePurse,
   /*  createPurseForm, */
    createPurseSubmit,
    updatePurseForm,
    updatePurseSubmit
}
export default functions
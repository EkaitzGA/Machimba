import adminController from "./adminController.js";

function adminPage(req,res){
    res.render("admin/adminMainPage")
}

async function showUsers(req, res){
    const users = await adminController.showUsers();
    res.render("admin/users",{ users })
}

async function showProducts(req, res){
    const purses = await adminController.showProducts();
    res.render("admin/adminProducts",{purses})
}

async function updatePurseForm(req,res){
    const id = parseInt(req.params.id);
    const purse = await pursesController.getById(id);
    res.render("admin/updatePurse", { purse }) 
}

async function showHistory(req, res){
    const histories = await adminController.showHistory();
    res.render("admin/purchase_history",{ histories })
    /* res.send("PAGINA PARA ACCEDER A LA TABLA PURCHASE_HISTORY DE LA BASE DE DATOS ") */
}

//funciones updatePurse, deletePurse, createPurse



function updatePurseSubmit(req, res){

}


function createPurseForm(req, res){
    res.render("admin/createPurse")
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
    adminPage,
    showUsers,
    showProducts,
    showHistory,
    deletePurse,
    createPurseForm,
    createPurseSubmit,
    updatePurseForm,
    updatePurseSubmit
}
export default functions
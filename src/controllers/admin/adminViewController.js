import adminController from "./adminController.js";

function adminPage(req,res){
    res.render("admin/adminMainPage")
}
async function showUsers(req, res){
    const users = await adminController.showUsers();
    res.render("admin/users",{ users })
   
}
async function showClients(req, res){
    const clients = await adminController.showClients();
    res.render("admin/clients",{ clients })
   
}
async function showWorkers(req, res){
    const workers = await adminController.showWorkers();
    res.render("admin/workers",{ workers })
  
}

async function showHistory(req, res){
    const histories = await adminController.showHistory();
    res.render("admin/purchase_history",{ histories })
    
}
//UPDATE
async function updateWorkerForm(req,res){
    const worker_id = parseInt(req.params.id);
    const worker = await adminController.getWorkerById(worker_id);
    console.log("worker")
    res.render("admin/updateWorker", { worker }) 
}

async function updateWorkerSubmit(req, res){
   
        const worker_id = parseInt(req.params.id);
        console.log("worker id",worker_id)
        const {user_name,password,email,first_name,last_name} = req.body
        await adminController.updateWorker(worker_id, user_name,password,email,first_name,last_name);
        res.redirect('/admin/users/workers');    
}

//CREATE
function createWorkerForm(req, res){
    res.render("admin/createWorker");
}

async function createWorkerSubmit(req, res) {
    
        const workerData = {
            user_name: req.body.username,    
            password: req.body.password,
            email: req.body.email,
            first_name: req.body.name,      
            last_name: req.body.surname,    
        };

        await adminController.createWorker(workerData);
        res.redirect('/admin/users/workers');
    
}

//DELETE
async function deleteWorker(req, res) {
    try {
        const id = parseInt(req.params.id);
        await adminController.deleteWorker(id);
        res.redirect('/admin/users/workers'); 
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error al borrar el trabajador');
    }
}



//CRUD PRODUCTS

//READ
async function showProducts(req, res){
    const purses = await adminController.showProducts();
    res.render("admin/adminProducts",{purses})
    /* res.send("PAGINA PARA ACCEDER A LA TABLA PRODUCTS DE LA BASE DE DATOS ") */
}

async function searchProducts(req, res) {
    try {
        const searchTerm = req.query.search;
        const purses = await adminController.searchProducts(searchTerm);
        res.render("admin/adminProducts", { purses });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error en la búsqueda');
    }
}

//UPDATE
async function updatePurseForm(req,res){
    const id = parseInt(req.params.id);
    const { purse, collections } = await adminController.getById(id);
    res.render("admin/updatePurse", { purse, collections }) 
}

async function updatePurseSubmit(req, res){
    try {
        const id = parseInt(req.params.id);
        const updatedData = {
            name: req.body.name,
            description: req.body.description,
            collection: req.body.collection,
            price: req.body.price,
            image: req.body.image,
            color: req.body.color,
            material: req.body.material
        };
        await adminController.updatePurse(id, updatedData);
        res.redirect('/admin/products');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error al actualizar el bolso');
    }
}

//CREATE
function createPurseForm(req, res){
    const collections = [
        'Antique Collection',
        'Permanent Collection',
        'Unique Collection',
        'Vintage Summer Collection',
        'New York Collection',
        'Hilma Collection'
    ];
    res.render("admin/createPurse", { collections });
}

async function createPurseSubmit(req, res) {
    try {
        const purseData = {
            name: req.body.name,
            description: req.body.description,
            collection: req.body.collection,
            price: req.body.price,
            color: req.body.color,
            material: req.body.material,
            image: req.body.image
        };
        
        await adminController.createPurse(purseData);
        res.redirect('/admin/products');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error al crear el bolso');
    }
}


//DELETE
async function deletePurse(req, res) {
    try {
        const id = parseInt(req.params.id);
        await adminController.deletePurse(id);
        res.redirect('/admin/products'); 
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error al borrar el bolso');
    }
}


export const functions ={
    adminPage,
    showUsers,
    searchProducts,
    showProducts,
    showHistory,
    deletePurse,
    createPurseForm,
    createPurseSubmit,
    updatePurseForm,
    updatePurseSubmit,
    showClients,
    showWorkers,
    updateWorkerForm,
    updateWorkerSubmit,
    createWorkerForm,
    createWorkerSubmit,
    deleteWorker

}
export default functions
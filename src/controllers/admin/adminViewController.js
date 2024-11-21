import adminController from "./adminController.js";

function adminPage(req,res){
    res.render("admin/adminProfile")
}
async function showUsers(req, res){
    const users = await adminController.showUsers();
    res.render("admin/adminUsers",{ users })
}
async function showClients(req, res){
    const clients = await adminController.showClients();
    res.render("admin/adminClients",{ clients })
}
async function showWorkers(req, res){
    const workers = await adminController.showWorkers();
    res.render("admin/adminWorkers",{ workers })
}

async function showHistory(req, res){
    const histories = await adminController.showHistory();
    res.render("admin/purchase-history",{ histories })
}

//UPDATE
async function updateWorkerForm(req,res){
    try{const worker_id = parseInt(req.params.id);
    const worker = await adminController.getWorkerById(worker_id);
    
    res.render("admin/updateWorker", { worker }) 
    }catch(error){
        console.error(error);
        const url=`/admin?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}

async function updateWorkerSubmit(req, res){
    try{const worker_id = parseInt(req.params.id);
        console.log("worker id",worker_id)
        const {user_name,password,email,first_name,last_name} = req.body
        await adminController.updateWorker(worker_id, user_name,password,email,first_name,last_name);
        res.redirect('/admin/users/workers');  
    }catch(error){
        console.error(error);
        const url=`/admin?message=${error.message}&messageType=error`
        res.redirect(url);
    }  
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
    res.redirect('/admin/workers');
}

//DELETE
async function deleteWorker(req, res) {
    try {
        const id = parseInt(req.params.id);
        await adminController.deleteWorker(id);
        res.redirect('/admin/workers'); 
    } catch (error) {
        console.error(error);
        const url=`/admin?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}



//CRUD PRODUCTS

//READ
async function showProducts(req, res){
    const page = parseInt(req.query.page || 1)
    const purses = await adminController.showProducts(page);
    res.render("admin/adminProducts",{purses, page})
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

async function searchProductsBy(req, res) {
    try {
        const searchTerm = req.query.search;
        const purses = await adminController.searchProductsBy(searchTerm);
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
    res.render("admin/updateProduct", { purse, collections }) 
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
    res.render("admin/createProduct", { collections });
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
    deleteWorker,
    searchProductsBy
}
export default functions
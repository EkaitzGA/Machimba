import adminController from "./adminController.js";

function adminPage(req, res) {
    res.render("admin/adminProfile")
}
async function showUsers(req, res) {
    try {
        const users = await adminController.showUsers();
        res.render("admin/adminUsers", { users })
    } catch (error) {
        console.error(error);
        const url = `/admin?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}

async function showClients(req, res) {
    try {
        const clients = await adminController.showClients();
        res.render("admin/adminClients", { clients })
    } catch (error) {
        console.error(error);
        const url = `/admin?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}

async function showWorkers(req, res) {
    try {
        const workers = await adminController.showWorkers();
        res.render("admin/adminWorkers", { workers })
    } catch (error) {
        console.error(error);
        const url = `/admin?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}

async function showHistory(req, res) {
    try {
        const histories = await adminController.showHistory();
        res.render("admin/purchase-history", { histories })
    } catch (error) {
        console.error(error);
        const url = `/admin?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}

//UPDATE
async function updateWorkerForm(req, res) {
    try {
        const worker_id = parseInt(req.params.id);
        const worker = await adminController.getWorkerById(worker_id);

        res.render("admin/updateWorker", { worker })
    } catch (error) {
        console.error(error);
        const url = `/admin?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}

async function updateWorkerSubmit(req, res) {
    try {
        const worker_id = parseInt(req.params.id);
        console.log("worker id", worker_id)
        const { user_name, password, email, first_name, last_name } = req.body
        await adminController.updateWorker(worker_id, user_name, password, email, first_name, last_name);
        res.redirect('/admin/users/workers');
    } catch (error) {
        console.error(error);
        const url = `/admin?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}

//CREATE
function createWorkerForm(req, res) {
    res.render("admin/createWorker");
}

async function createWorkerSubmit(req, res) {
    try {
        const workerData = {
            user_name: req.body.username,
            password: req.body.password,
            email: req.body.email,
            first_name: req.body.name,
            last_name: req.body.surname,
        };
        await adminController.createWorker(workerData);
        res.redirect('/admin/workers');
    } catch (error) {
        console.error(error);
        const url = `/admin?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}

//DELETE
async function deleteWorker(req, res) {
    try {
        const id = parseInt(req.params.id);
        await adminController.deleteWorker(id);
        res.redirect('/admin/workers');
    } catch (error) {
        console.error(error);
        const url = `/admin?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}



//CRUD PRODUCTS

//READ
async function showProducts(req, res) {
    try {
        const page = parseInt(req.query.page || 1)
        const purses = await adminController.showProducts(page);
        res.render("admin/adminProducts", { purses, page })
    } catch (error) {
        console.error(error);
        const url = `/admin?message=${error.message}&messageType=error`
        res.redirect(url);
    }

}

async function searchProducts(req, res) {
    try {
        const searchTerm = req.query.search;
        const purses = await adminController.searchProducts(searchTerm);
        res.render("admin/adminProducts", { purses });
    } catch (error) {
        console.error(error);
        const url = `/admin?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}

async function searchProductsBy(req, res) {
    try {
        const searchTerm = req.query.search;
        const purses = await adminController.searchProductsBy(searchTerm);
        res.render("admin/adminProducts", { purses });
    } catch (error) {
        console.error(error);
        const url = `/admin?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}

//UPDATE
async function updatePurseForm(req, res) {
    try {
        const id = parseInt(req.params.id);
        const { purse, collections } = await adminController.getById(id);
        res.render("admin/updateProduct", { purse, collections })
    } catch (error) {
        console.error(error);
        const url = `/admin?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}

async function updatePurseSubmit(req, res) {
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
        console.error(error);
        const url = `/admin?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}

//CREATE
function createPurseForm(req, res) {
    try {
        const collections = [
            'Antique Collection',
            'Permanent Collection',
            'Unique Collection',
            'Vintage Summer Collection',
            'New York Collection',
            'Hilma Collection'
        ];
        res.render("admin/createProduct", { collections });
    } catch (error) {
        console.error(error);
        const url = `/admin?message=${error.message}&messageType=error`
        res.redirect(url);
    }
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
        console.error(error);
        const url = `/admin?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}


//DELETE
async function deletePurse(req, res) {
    try {
        const id = parseInt(req.params.id);
        await adminController.deletePurse(id);
        res.redirect('/admin/products');
    } catch (error) {
        console.error(error);
        const url = `/admin?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}


export const functions = {
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
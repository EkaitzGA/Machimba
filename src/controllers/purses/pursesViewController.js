import pursesController from "./pursesController.js"

async function getAll(req,res){
    try{const page = parseInt(req.query.page || 1);
    const purses = await pursesController.getAll(page);
    res.render("purses/purses", { purses,page })
} catch (error) {
    console.error(error);
    const url=`/purses?message=${error.message}&messageType=error`
    res.redirect(url);
}
}

async function getById(req,res){
    try{const id = parseInt(req.params.id);
    const purse = await pursesController.getById(id);
    res.render("purses/individualPurse", { purse }) 
} catch (error) {
    console.error(error);
    const url=`/purses?message=${error.message}&messageType=error`
    res.redirect(url);
}
}

////formularios de Busqueda

async function showPurses(req, res) {
    try {
        const purses = await pursesController.showProducts();
        const colors = [...new Set(purses.map(purse => purse.color))];
        const materials = [...new Set(purses.map(purse => purse.material))];
        
        res.render('purses/purses', { 
            purses,
            colors,
            materials
        });
    } catch (error) {
        console.error(error);
        const url=`/purses?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}

async function searchPurses(req, res) {
    try {
        const searchTerm = req.query.search;
        const purses = await pursesController.searchPurses(searchTerm);
        
        res.render('purses/purses', { 
            purses
           
        });
    } catch (error) {
        console.error(error);
        const url=`/purses?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}

async function filterPurses(req, res) {
    try {
        const filterParams = {
            collection: req.query.collection,
            color: req.query.color,
            material: req.query.material
        };
        const purses = await pursesController.filterPurses(filterParams);
        res.render('purses/purses', { purses });
    } catch (error) {
        console.error(error);
        const url=`/purses?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}

export const functions ={
    getAll,
    getById,
    showPurses,
    searchPurses,
    filterPurses
}
export default functions
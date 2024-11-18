import pursesController from "./pursesController.js"

async function getAll(req,res){
    const page = parseInt(req.query.page || 1);
    const purses = await pursesController.getAll(page);
    res.render("purses/purses", { purses,page })
}

async function getById(req,res){
    const id = parseInt(req.params.id);
    const purse = await pursesController.getById(id);
    res.render("purses/individualPurse", { purse }) 
}

////formularios de Busqueda

async function showPurses(req, res) {
    try {
        const purses = await pursesController.showProducts();
        
        // Obtener colores 
        const colors = [...new Set(purses.map(purse => purse.color))];
        
        // Obtener materiales 
        const materials = [...new Set(purses.map(purse => purse.material))];
        
        res.render('purses/purses', { 
            purses,
            colors,
            materials
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error al cargar los bolsos');
    }
}

async function searchPurses(req, res) {
    try {
        const searchTerm = req.query.search;
        const purses = await pursesController.searchPurses(searchTerm);
        
        // Obtener colores y materiales incluso para resultados de búsqueda
        // const colors = [...new Set(purses.map(purse => purse.color))];
        // const materials = [...new Set(purses.map(purse => purse.material))];
        
        res.render('purses/purses', { 
            purses
            // colors,
            // materials
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error en la búsqueda');
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
        console.error('Error:', error);
        res.status(500).send('Error al filtrar los bolsos');
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
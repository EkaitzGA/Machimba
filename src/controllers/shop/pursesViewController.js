import pursesController from "./pursesController.js"

async function getAll(req,res){
    const purses = await pursesController.getAll();
    res.render("purses/purses", { purses })
}

async function getById(req,res){
    const id = parseInt(req.params.id);
    const purse = await pursesController.getById(id);
    res.render("purses/individualPurse", { purse }) 
}

export const functions ={
    getAll,
    getById,
}
export default functions
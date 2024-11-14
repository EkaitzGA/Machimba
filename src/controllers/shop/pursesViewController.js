import pursesController from "./pursesController.js"

async function getAll(req,res){
    const purses = await pursesController.getAll();
    res.render("purses/purses", { purses })
}

async function getById(req,res){
    const purse = parseInt(req.params.id)
    res.render("purses/individualPurse") 
}

export const functions ={
    getAll,
    getById,
}
export default functions
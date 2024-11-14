import purseModel from "../../models.purseModel.js"

// function getAll(req,res){
//     res.render("purses/purses")
// }

// function getById(req,res){
//     res.send("Página individual de un bolso")
// }


// export const functions ={
//     getAll,
//     getById,
// }
// export default functions

async function getAll(){
    const purses = await purseModel.findAll();
    return purses;
}

async function getById(id){
    const purse = await purseModel.findByPk(id);
    return purse;
}

export const functions ={
    getAll,
    getById,
}
export default functions
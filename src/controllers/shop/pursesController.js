import purseModel from "../../models/purseModel.js"


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
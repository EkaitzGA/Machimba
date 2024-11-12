function getAll(req,res){
    res.send("Catálogo completo de los bolsos")
}

function getById(req,res){
    res.send("Página individual de un bolso")
}


export const functions ={
    getAll,
    getById,
}
export default functions
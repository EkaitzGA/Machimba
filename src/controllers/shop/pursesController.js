function getAll(req,res){
    res.render("purses/purses")
}

function getById(req,res){
    res.send("Página individual de un bolso")
}


export const functions ={
    getAll,
    getById,
}
export default functions
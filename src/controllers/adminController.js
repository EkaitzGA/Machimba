function adminPage(req,res){
    res.send("PAGINA DE INICIO DE ADMINISTRADOR")
}

function showUsers(req, res){
    res.send("PAGINA PARA ACCEDER A LA TABLA USER DE LA BASE DE DATOS")
}

function showProducts(req, res){
    res.send("PAGINA PARA ACCEDER A LA TABLA PRODUCTS DE LA BASE DE DATOS ")
}

function showHistory(req, res){
    res.send("PAGINA PARA ACCEDER A LA TABLA PURCHASE_HISTORY DE LA BASE DE DATOS ")
}

export const functions ={
    adminPage,
    showUsers,
    showProducts,
    showHistory,
}
export default functions
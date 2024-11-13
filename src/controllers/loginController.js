function login(req,res){
    res.render("login")
}
function loginAccess(req,res){
    const {username,password} = req.body;
    res.json(req.body) /*Esto es temporal hasta tener acceso */
   /* res.redirect("/client-profile"); */
}
function registerAccess(req,res){
    res.redirect("/register")
}
export const functions ={
    login,
    loginAccess,
    registerAccess
}
export default functions
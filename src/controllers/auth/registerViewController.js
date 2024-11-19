import registerController from "./registerController.js";

function registerForm(req,res){
    const {message,messageType}=req.query;
    res.render("auth/register",{message,messageType});
}

async function registerNewClient(req, res){
    try {
    const {user_name, first_name, last_name, email, password, passwordConfirm} = req.body;
    await registerController.register(user_name, first_name, last_name, email, password, passwordConfirm);
    res.redirect('/purses')
    } catch (error) {
        console.error(error);
        const url=`/register?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}


export const functions = {
    registerForm, 
    registerNewClient
}

export default functions;
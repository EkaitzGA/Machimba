function registerForm(req,res){
    res.render("register")
}

function registerSubmit(req,res){
    const {username, firstname, lastname, email, password} = req.body;
    res.json(req.body)
}

//- username
//- first name 
//- last name 
//- email 
//- password 

export const functions ={
    registerForm,
    registerSubmit
}
export default functions
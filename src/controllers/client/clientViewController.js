import clientController from "./clientController.js";

async function showProfile(req,res){
    const client_id = parseInt(req.params.id);
    const client = await clientController.getClientById(client_id);
    const history = await clientController.showClientHistory(client_id);
    res.render("client/clientProfile", { client, history });
}

async function showCompleteHistory(req,res){
    const client_id = parseInt(req.params.id);
    const history = await clientController.showClientHistory(client_id);
    res.render("client/clientHistory", { history });
}

async function updateForm(req, res) {
    const client_id = parseInt(req.params.id);
    const client = await clientController.getClientById(client_id)
    res.render("client/updateClientPersonalData", { client })
}

async function update(req, res) {
    const {user_name, password, email, first_name, last_name, address, phone} = req.body;
    const client_id = parseInt(req.params.id);
    await clientController.updatePersonalData(client_id, user_name, password, email, first_name, last_name, address, phone);
    res.redirect('/client-profile/' + client_id);
}

async function remove(req, res) {
    const client_id = parseInt(req.params.id);
    await clientController.removeClientProfile(client_id);
    res.redirect("/home");
}



export const functions ={
    showProfile,
    updateForm,
    update,
    remove,
    showCompleteHistory
}
export default functions
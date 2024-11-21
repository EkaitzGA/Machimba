import clientController from "./clientController.js";

async function showProfile(req, res) {
    try {
        const client_id = parseInt(req.params.id);
        const client = await clientController.getClientById(client_id);
        const history = await clientController.showClientHistory(client_id);
        res.render("client/clientProfile", { client, history });
    } catch (error) {
        console.error(error);
        const url = `/client?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}

async function showCompleteHistory(req, res) {
    try {
        const client_id = parseInt(req.params.id);
        const history = await clientController.showClientHistory(client_id);
        res.render("client/clientHistory", { history });
    } catch (error) {
        console.error(error);
        const url = `/client?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}

async function updateForm(req, res) {
    try {
        const client_id = parseInt(req.params.id);
        const client = await clientController.getClientById(client_id)
        res.render("client/updateClientPersonalData", { client })
    } catch (error) {
        console.error(error);
        const url = `/client?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}

async function update(req, res) {
    try {
        const { user_name, password, email, first_name, last_name, address, phone } = req.body;
        const client_id = parseInt(req.params.id);
        await clientController.updatePersonalData(client_id, user_name, password, email, first_name, last_name, address, phone);
        res.redirect('/client-profile/' + client_id);
    } catch (error) {
        console.error(error);
        const url = `/client-profile?message=${error.message}&messageType=error`
        res.redirect(url);

    }
}

async function remove(req, res) {
    try {
        const client_id = parseInt(req.params.id);
        await clientController.removeClientProfile(client_id);
        res.redirect("/home");
    } catch (error) {
        console.error(error);
        const url = `/home?message=${error.message}&messageType=error`
        res.redirect(url);

    }
}



export const functions = {
    showProfile,
    updateForm,
    update,
    remove,
    showCompleteHistory
}
export default functions
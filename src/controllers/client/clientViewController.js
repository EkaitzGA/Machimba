import clientController from "./clientController.js";

async function showProfile(req,res){
    const client_id = parseInt(req.params.id);
    const history = await clientController.showClientHistory(client_id);
    const personalData = await clientController.showPersonalData(client_id);
    res.render("client/clientProfile", { history , personalData });
}


async function getClientHistory(req, res){
    const client_id = parseInt(req.params.id);
    const history = await clientController.showClientHistory(client_id);
    res.render("client/clientHistory", { history });
}


async function getPersonalData(req,res){
    const id = parseInt(req.params.id);
    const personalData = await clientController.showPersonalData(id);
    res.render("client/clientPersonalData", { personalData }) 
}



export const functions ={
    showProfile,
    getClientHistory,
    getPersonalData
}
export default functions
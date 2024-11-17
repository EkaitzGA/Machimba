import adminUserModel from "../../models/adminUserModel.js"
import clientModel from "../../models/clientModel.js"
import historyModel from "../../models/historyModel.js"

function showProfile(){
    res.render("client/clientProfile")
}


async function showClientHistory(client_id){
    const history = await historyModel.findAll({
        where: { client_id: client_id }
    });
    return history;
}

async function showPersonalData(id){
    const personalData = await adminUserModel.findByPk(id,{
        include: clientModel
    });
    return personalData;
}


export const functions ={
    showProfile,
    showClientHistory,
    showPersonalData
}
export default functions
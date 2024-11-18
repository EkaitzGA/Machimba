import adminUserModel from "../../models/adminUserModel.js"
import clientModel from "../../models/clientModel.js"
import historyModel from "../../models/historyModel.js"

async function showClientHistory(client_id){
    const history = await historyModel.findAll({
        where: { client_id: client_id }
    });
    return history;
}

async function getClientById(client_id){
    const personalData = await clientModel.findByPk(client_id,{
        include: adminUserModel
    });
    return personalData;
}

async function updatePersonalData(client_id, user_name, password, email, first_name, last_name, address, phone){
    const client = await clientModel.findByPk(client_id);
    const user = await adminUserModel.findByPk(client.user_id);
    user.user_name= user_name;
    user.password= password;
    user.email= email;
    user.first_name= first_name;
    user.last_name= last_name
    client.address= address;
    client.phone = phone
    await client.save();
    await user.save();
    return client, user;
}

async function removeClientProfile(client_id){
    const client = await clientModel.findByPk(client_id);
    const userToRemove = await adminUserModel.findByPk(client.user_id);
    await userToRemove.destroy();
    return userToRemove;
}


export const functions ={
    showClientHistory,
    updatePersonalData,
    removeClientProfile,
    getClientById
}
export default functions
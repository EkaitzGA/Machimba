import userModel from "../../models/userModel.js"
import clientModel from "../../models/clientModel.js"
import historyModel from "../../models/historyModel.js"
import { hashPassword } from "../../config/bcrypt.js";
import error from  "../../helpers/errors.js"


async function showClientHistory(client_id) {
    const history = await historyModel.findAll({
        where: { client_id: client_id }
    });
    if(!history){
        throw new error.FINDALL_EMPTY();}
    return cleanHistoryByPurchase(history);
}

function cleanHistoryByPurchase(history) {
    const purchases = [];
    for (const register of history) {
        let purchase = purchases.find((e) => e.purchase_id == register.purchase_id)
        if (!purchase) {
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                };
            const formatedDate = new Date(register.date).toLocaleDateString('es-ES', options);
            purchase = {
                purchase_id: register.purchase_id,
                date: formatedDate,
                status: register.status,
                products: []
            }
            purchases.push(purchase);
        }
        purchase.products.push(register);
    }
    return purchases;
}

async function getClientById(client_id) {
    const personalData = await clientModel.findByPk(client_id, {
        include: userModel
    });
    if(!personalData){
        throw new error.CLIENT_NOT_FOUND();
    }
    const options = {
        year: 'numeric',
        month: 'long',
        };
    personalData.formatted_date = new Date(personalData.user.register_date).toLocaleDateString('es-ES', options);
    console.log(personalData);
    return personalData;
}

async function getClientByEmail(email) {
    const client = await clientModel.findOne({
        include: {
            model: userModel,
            where: {
                email: email
            }
        }
    })
    return client;
}

async function getClientByUserName(user_name) {
    const client = await clientModel.findOne({
        include: {
            model: userModel,
            where: {
                user_name: user_name
            }
        }
    })
    return client;
}

async function createClient(user_name, first_name, last_name, email, password) {
    const hash = await hashPassword(password);
    if(!hash){
        throw new error.INVALID_CREDENTIALS();
    }
    const newUser = await userModel.create({
        user_name: user_name,
        password: hash,
        email: email,
        first_name: first_name,
        last_name: last_name
    });
    if(!newUser){
        throw new error.CREATE_DOESNT_WORK();
    }
    const newClient = await clientModel.create({
        user_id: newUser.user_id
    });
    if(!newClient){
        throw new error.CREATE_DOESNT_WORK();
    }
    return newClient, newUser;
}

async function updatePersonalData(client_id, user_name, password, email, first_name, last_name, address, phone) {
    const client = await clientModel.findByPk(client_id);
    if(!client){
        throw new error.CLIENT_NOT_FOUND();
    }
    const user = await userModel.findByPk(client.user_id);
    if(!user){
        throw new error.CLIENT_NOT_FOUND();
    }
    user.user_name = user_name;
    if (password) {
        const hash = hashPassword(password);
        user.password = hash;
        if(!hash){
            throw new error.INVALID_CREDENTIALS();
        }
    }
    user.email = email;
    user.first_name = first_name;
    user.last_name = last_name
    client.address = address;
    client.phone = phone
    await client.save();
    await user.save();
    return client, user;
}

async function removeClientProfile(client_id) {
    const client = await clientModel.findByPk(client_id);
    if(!client){
        throw new error.CLIENT_NOT_FOUND();
    }
    const userToRemove = await userModel.findByPk(client.user_id);
    if(!userToRemove){
        throw new error.CLIENT_NOT_FOUND();
    }
    await userToRemove.destroy();
    return userToRemove;
}


export const functions = {
    showClientHistory,
    updatePersonalData,
    removeClientProfile,
    getClientById,
    getClientByEmail,
    createClient,
    getClientByUserName,
}
export default functions
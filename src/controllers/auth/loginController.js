import clientController from "../client/clientController.js";
import error from '../../helpers/errors.js';
import { verifyPassword } from "../../config/bcrypt.js";

async function login(email,password){
    const client = await clientController.getClientByEmail(email);
    if(!client){
        throw new error.CLIENT_NOT_FOUND();
    }
    const verified = await verifyPassword(password,client.user.password);
    if(!verified){
        throw new error.INVALID_CREDENTIALS();
    }
    return client;
}


export const functions ={
    login
}
export default functions
import clientController from "../client/clientController.js";
import adminController from "../admin/adminController.js";
import error from '../../helpers/errors.js';
import { verifyPassword } from "../../config/bcrypt.js";

async function login(email,password){
    let user = await clientController.getClientByEmail(email);
    if(!user){
        user = await adminController.getWorkerByEmail(email);
        if (!user) {
            throw new error.EMAIL_NOT_FOUND();
        }
    }
    const verified = await verifyPassword(password,user.user.password);
    if(!verified){
        throw new error.INVALID_CREDENTIALS();
    } //Revisar por si diese error
    return user;
}


export const functions ={
    login
}
export default functions
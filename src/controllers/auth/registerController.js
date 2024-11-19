import clientController from "../client/clientController.js";
import error from '../../helpers/errors.js';

async function register(user_name, first_name, last_name, email, password, passwordConfirm){
    if(password != passwordConfirm){
        throw new error.PASSWORDS_DONT_MATCH();
    }
    const oldClient1 = await clientController.getClientByEmail(email);
    if(oldClient1){
        throw new error.EMAIL_ALREADY_EXISTS();
    }
    const oldClient2 = await clientController.getClientByUserName(user_name);
    if(oldClient2){
        throw new error.CLIENT_ALREADY_EXISTS();
    }
    const newClient = await clientController.createClient(user_name, first_name, last_name, email, password);
    return newClient;
}

export const functions ={
    register
}
export default functions
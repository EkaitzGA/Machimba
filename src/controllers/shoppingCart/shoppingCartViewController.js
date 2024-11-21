import shoppingCartController from "./shoppingCartController.js"
import clientController from "../client/clientController.js"

async function showCart(req,res){
    try{const client_id = req.session.user.client_id;
    const client = await clientController.getClientById(client_id);
    const shoppingCart = await shoppingCartController.getOpenPurchaseByClient(client_id);
    res.render("purses/shoppingCart", {cart:shoppingCart, client});
}catch{
    console.error(error);
    const url=`/purses?message=${error.message}&messageType=error`
    res.redirect(url);
}
}

async function addProduct(req,res){
    try{
        const {product_id} = req.body;
        const client_id = req.session.user.client_id;
        const purchase = await shoppingCartController.addPurse(client_id,parseInt(product_id));
        res.redirect('/purses');
    }catch{
        console.error(error);
        const url=`/purses?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}

async function setProductQuantity(req,res){
    try{
        const {product_id,quantity} = req.body;
        const client_id = req.session.user.client_id;
        const purchase = await shoppingCartController.setPurseQuantity(client_id,parseInt(product_id),parseInt(quantity));
        res.redirect("/shopping-cart");
    }catch{
        console.error(error);
        const url=`/shopping-cart?message=${error.message}&messageType=error`
        res.redirect(url);
    }
    
}

async function removeProduct(req,res){
    try{
        const {product_id} = req.body;
        const client_id = req.session.user.client_id;
        const purchase = await shoppingCartController.setPurseQuantity(client_id,parseInt(product_id),0);
        res.redirect("/shopping-cart");
    }catch{
        console.error(error);
        const url=`/shopping-cart?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}

async function finishPurchase(req,res){
    try {
        const client_id = req.session.user.client_id;
        await shoppingCartController.closePurchase(client_id)
        res.redirect(`/client-profile/${client_id}`);
    }catch{
        console.error(error);
        const url=`/client-profile/${client_id}?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}

export const functions={
    showCart,
    addProduct,
    setProductQuantity,
    removeProduct,
    finishPurchase
}
export default functions

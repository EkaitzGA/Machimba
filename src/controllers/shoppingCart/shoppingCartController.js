import Purchase from "../../models/purchaseModel.js"
import Purse from "../../models/purseModel.js"
import error from "../../helpers/errors.js"


async function getOpenPurchaseByClient(client_id){
    const purchase = await Purchase.findOne({where:{client_id:client_id,status:"pendiente"},include:Purse})
    if(!purchase){
        throw new error.PURCHASE_NOT_FOUND();
    }
    return purchase;
}

async function getOrCreateOpenPurchaseByClient(client_id){
    let purchase = await getOpenPurchaseByClient(client_id);
    if(!purchase){
        purchase = await create(client_id);
    }
    if(!purchase){
        throw new error.CREATE_DOESNT_WORK();
    }
    return purchase;
}

async function create(client_id){
    const openPurchase = await getOpenPurchaseByClient(client_id);
    if(openPurchase){
        throw new error.ORDER_ALREADY_OPEN();
    }
    const newPurchase = await Purchase.create({client_id});
    if(!newPurchase){
        throw new error.CREATE_DOESNT_WORK();
    }
    return newPurchase;
}

async function addPurse(client_id,product_id){
    const purchase = await getOrCreateOpenPurchaseByClient(client_id);
    const product = purchase.product?.find(p =>p.product_id===product_id);
    console.log(product);
    await purchase.addProduct(product_id);
    console.log(purchase);
    return purchase;
}

async function setPurseQuantity(client_id,product_id,quantity){
    const purchase = await getOrCreateOpenPurchaseByClient(client_id);
    if(quantity <= 0){
        await purchase.removeProduct(product_id);
    }else{
        await purchase.addProduct(product_id,{through:{quantity:quantity}});
    }
    return purchase;
}

async function closePurchase(client_id){
    const purchase = await getOpenPurchaseByClient(client_id);
    if(!purchase){
        throw new error.ORDER_DOESNT_EXIST();
    }
    purchase.status="aceptado/solicitado";
    await purchase.save();
    return purchase;
}

export const functions ={
    getOpenPurchaseByClient,
    getOrCreateOpenPurchaseByClient,
    create,
    addPurse,
    setPurseQuantity,
    closePurchase
}
export default functions

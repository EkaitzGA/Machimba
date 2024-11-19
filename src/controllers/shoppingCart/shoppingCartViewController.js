function showCart(req,res){
    res.render("purses/shoppingCart")

}
export const functions={
    showCart
}
export default functions

// router.get("/:id/update",shoppingCartViewController.updateCart)
// router.post("/:id/delete", shoppingCartViewController.deleteItem)
// router.post("/delete", shoppingCartViewController.deleteAll)
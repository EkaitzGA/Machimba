function isAuthenticated(req,res,next){
    console.log(req.session);
    if(req.session.user){
        next();
    }else{
        res.redirect("/login")
    }
}

function isWorker(req,res,next){
    if(req.session.user && req.session.user.worker_id){
        next();
    }else{
        res.redirect("/login")
    }
}

function isClient(req,res,next){
    if(req.session.user && req.session.user.client_id){
        next();
    }else{
        res.redirect("/login")
    }
}

function isWorkerOrActualClient(req,res,next){
    const client_id = req.params.id;
    console.log(client_id, req.session.user, req.params)
    if(req.session.user && (req.session.user.worker_id || client_id == req.session.user.client_id) ){
        next();
    }else{
        res.redirect("/login")
    }
}

export {
    isAuthenticated,
    isWorker,
    isClient,
    isWorkerOrActualClient
}
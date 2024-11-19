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


export {
    isAuthenticated,
    isWorker,
    isClient
}
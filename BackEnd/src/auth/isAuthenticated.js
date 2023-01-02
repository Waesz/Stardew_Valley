

//TO BE IMPLEMENTED USING TOKENS, CHECK IF TOKEN IS VAILIBLE AND IF NOT DEAD


module.exports =(req,res,next)=> {

    if(req.user == undefined){
        next();
    }
    
    res.redirect('/user/dashboard')

}
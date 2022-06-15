const get = (req, res) => {
    res.status(200);
    res.send('products API');
};

const health=(req,res)=>{
    res.status(200);
    res.send({"health":"up"})
}



module.exports = {
    get,
    health
}
const get = (req, res) => {
    res.status(200);
    res.send('list of product');
}


module.exports = { get };
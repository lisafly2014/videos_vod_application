const path = require('path');

exports.home = function(req, res){
    console.log('User Info: ', req.connection.remoteAddress);
    res.sendFile( path.join(__dirname + '../../public/index.html'));
};

exports.notFound = function(req,res){
    res.status(404).send("This is not the page that you are looking for");
}
//MODULES
const express= require('express');
const app= express();
const router =require('../routes/index')
const path = require('path')
//SETTINGS
app.set('port','3000')
app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname, 'views'));
app.engine('html',require('ejs').renderFile)
//MIDDLEWARES
app.use(router)
app.use(express.static(path.join(__dirname ,'public')))
//BOOTSTRAP
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));

//SERVER LISTENING
app.listen(app.get('port'),()=>{
    console.log(`Server Running on port ${app.get('port')}`)
})


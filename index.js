const { express, app } = require('./node/routes.js')
app.use('/css/', express.static('./css/'))
app.use('/js/', express.static('./js/'))
app.use('/view/', express.static('./view/'))

app.get('/', ()=>{

})
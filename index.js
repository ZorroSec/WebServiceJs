const { express, app } = require('./node/routes.js')
app.use('/css/', express.static('./css/'))
app.use('/js/', express.static('./js/'))
app.use('/view/', express.static('./view/'))

app.get('/', ()=>{
	app.sendFile(__dirname + '/view/index.html')
})

app.listen(3000, (err, done)=>{
	if(!err){
		console.log({
			Message: 'success'
		})
	}
})
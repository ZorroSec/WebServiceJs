const footer = document.getElementById('footer')
const footerReturn = ()=>{
	const today = new Date()
	const hour = today.getHours()
	const minu = today.getMinutes()
	const seco = today.getSeconds()
	const m = checkTIme(minu)
	const s = checkTIme(seco)
	footer.innerHTML+=`&copy;Zezao ${hour}:${m}:${s}`
}
const checkTIme = (i)=>{
	if(i<=10){
		i = "0" + i
	}
	return i
}
const footerReturn = ()=>{
	const today = new Date()
	const hour = today.getHours()
	const minu = today.getMinutes()
	const seco = today.getSeconds()
	const m = checkTme(minu)
	const s = checkTme(seco)
	document.getElementById('footer').innerHTML=`&copy;Zezao ${hour}:${m}:${s}`
	t = setTimeout('footerReturn()', 500)
}
const checkTme = (i)=>{
	if(i<=10){
		i = "0" + i
	}
	return i
}
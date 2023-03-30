const cepSearch = ()=>{
    let cep = document.getElementById('cep')
    let btn = document.getElementById('btn')
    btn.onclick = ()=>{
        fetch(`https://brasilapi.com.br/api/cep/v1/${cep.value}`).then(res=>{
            res.json().then(data=>{
                console.log(data)
            })
        })
    }
}
const cepSearch = ()=>{
    let cep = document.getElementById('cep')
    let btn = document.getElementById('btn')
    btn.onclick = ()=>{
        fetch(`https://brasilapi.com.br/api/cep/v1/${cep.value}`).then(res=>{
            res.json().then(data=>{
                for(let [key, value] of Object.entries(data)){
                    console.log(key, value)
                }
            })
        })
    }
}
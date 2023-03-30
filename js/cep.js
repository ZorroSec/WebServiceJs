const cepSearch = ()=>{
    let cep = document.getElementById('cep')
    let btn = document.getElementById('btn')
    let keys = document.getElementById('keys')
    let value = document.getElementById('values')
    btn.onclick = ()=>{
        fetch(`https://brasilapi.com.br/api/cep/v1/${cep.value}`).then(res=>{
            res.json().then(data=>{
                for(let [key, value] of Object.entries(data)){
                    keys.innerHTML+=`
                    <th>${key}</th>
                    `
                    value.innerHTML+=`
                    <td>${values}</td>
                    `
                }
            })
        })
    }
}
const cepSearch = ()=>{
    let cep = document.getElementById('cep')
    let btn = document.getElementById('btn')
    let ret = document.getElementById('return')
    btn.onclick = ()=>{
        fetch(`https://brasilapi.com.br/api/cep/v1/${cep.value}`).then(res=>{
            res.json().then(data=>{
                for(let [key, value] of Object.entries(data)){
                    ret.innerHTML+=`
                    <table border='1'>
                        <tr>
                            <td>${key}</td>
                        </tr>
                        <tr>
                            <th>${value}</th>
                        </tr>
                    </table>
                    `
                }
            })
        })
    }
}
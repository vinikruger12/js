function contar(){
    var comeco = window.document.querySelector('input#idstart')
        var start = Number(comeco.value)

    var fim = window.document.querySelector('input#idend')
        var end = Number(fim.value)

    var passo = window.document.querySelector('input#idpasso')
        var pass = Number(passo.value)

    var res = window.document.querySelector('div.res')

    if(start == 0 || end == 0 || pass == 0){
        window.alert('[ERRO]')
    } else{
        res.innerHTML =  `Contando: <br>`

        if(start < end)
        for(var a = start; a <= end; a += pass){
            res.innerHTML += `${a} \u{1F449}`
        }
        else{
            for(var a = start; a >= end; a -= pass){
            res.innerHTML +=  `${a} \u{1F449}`
        }

        }
        res.innerHTML += `\u{1F3C1}`

    }
    
}
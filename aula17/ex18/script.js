var num = window.document.querySelector('input#idnum')
var select = window.document.querySelector('select#idselecionar')
var res = window.document.querySelector('div#res')
var valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item = window.document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        select.appendChild(item)
        res.innerHTML = ''
} else{
    window.alert('Valor invalido!')
}
num.value = ''
num.focus()

}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores!')
    }else{
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0


        for(var pos in valores){
            soma += valores[pos]
            media = soma / total
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }

        res.innerHTML = ''
        res.innerHTML +=` <p>Ao todo ele tem ${total} elementos!</p>`
        res.innerHTML += `<p>O maior numero eh o ${maior}</p>`
        res.innerHTML += `<p>O menor numero eh o ${menor} </p>`
        res.innerHTML += `<p>A soma eh ${soma} </p>`
        res.innerHTML += `<p>A media eh ${media} </p>`


    }
}

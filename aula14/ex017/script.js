function tabuada(){
    var num = window.document.querySelector('input#idnum')
        var number = Number(num.value)

    var tab = window.document.querySelector('select#idtabuada')

    var c = 1
   tab.innerHTML = ''
if(number.value.length == 0){
    window.alert('[ERRO]')
}else{
    while(c <= 10){
        var item = window.document.createElement('option')
        item.text = `${number} x ${c} = ${number*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
    }}
}
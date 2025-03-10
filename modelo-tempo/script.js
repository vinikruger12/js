var hora = new Date()
var horario = hora.getHours()
var texto = window.document.querySelector('div.hora')



texto.innerHTML = `Agora sao ${horario} horas`

if (horario >= 4 && horario <= 12){
     document.querySelector("div.img").style.backgroundImage = 'url(imagens/manha.jpg)'
    document.body.style.background = '#EADBCB'
   
}
else if(horario < 18 && horario > 12){
    document.querySelector("div.img").style.backgroundImage = 'url(imagens/tarde.jpg)'
     document.body.style.background = '#773E33'
    
}

else{
     document.querySelector("div.img").style.backgroundImage = 'url(imagens/noite.png)'
     document.body.style.background = '#616267'
   
}

var calculo = new Date()
var ano = calculo.getFullYear()

var res = window.document.querySelector('div.res')

var idade = window.document.querySelector('input#idadetxt')

var genero = ''



function calcular(){
    
    var H = window.document.querySelector('input#men')
    var M = window.document.querySelector('input#women')
    var conta = ano - Number(idade.value)

    if ( idade.value.length == 0 || Number(idade.value) > ano){
        window.alert('[ERRO] Verifique o ano')
    }
    else{

        if(H.checked){
            genero = 'homem'

            if (conta >= 0 && conta <= 6){

              document.querySelector('div#img').style.display = 'block'
            document.querySelector('div#img').style.backgroundImage = 'url(imagens/bebeH.jpg)'
        }else if(conta >= 7 && conta <= 16){
            document.querySelector('div#img').style.display = 'block'
            document.querySelector('div#img').style.backgroundImage = 'url(imagens/teenH.jpg)'
        }else if(conta >= 17 && conta <= 60){
             document.querySelector('div#img').style.display = 'block'
            document.querySelector('div#img').style.backgroundImage = 'url(imagens/adultH.jpg)'
        }else{
             document.querySelector('div#img').style.display = 'block'
            document.querySelector('div#img').style.backgroundImage = 'url(imagens/oldH.jpg)'
        }
        
        }

        if(M.checked){
            genero = 'mulher'

            if (conta >= 0 && conta <= 6){

                document.querySelector('div#img').style.display = 'block'
              document.querySelector('div#img').style.backgroundImage = 'url(imagens/bebeM.jpg)'
          }else if(conta >= 7 && conta <= 16){
              document.querySelector('div#img').style.display = 'block'
              document.querySelector('div#img').style.backgroundImage = 'url(imagens/teenM.jpg)'
          }else if(conta >= 17 && conta <= 60){
               document.querySelector('div#img').style.display = 'block'
              document.querySelector('div#img').style.backgroundImage = 'url(imagens/adultM.jpg)'
          }else{
               document.querySelector('div#img').style.display = 'block'
              document.querySelector('div#img').style.backgroundImage = 'url(imagens/oldM.jpg)'
          }
        }

        
            
            
    
    }


    
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${conta} anos!`
 
    
   
    

}



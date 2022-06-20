function calcular(){
  var num = document.getElementById('tnum')
  let tab = document.getElementById('seltab')
  var mens = document.getElementById('mens')
  var operador = document.getElementById('c_oper')
  var voper = operador.value
  
  var vnum = Number(num.value)
  var c = 1


  if (num.value.length == 0) {
      alert('[ERRO] Digite um numero!') 
        
  } else { 
      
     tab.innerHTML ='' //PARA LIMPAR A TABUADA ANTERIOR
    
     while (c <= 10) {  


       mens.innerHTML = `Tabuada do ${vnum}`
       var item = document.createElement('option') //cria um elemento html
    
       item.value = `tab${c}`//serve para enviar dados para PHP
       tab.appendChild(item)
       item.style.width = '150px'

          if( voper == 'Soma') { 
            var calc = vnum + c
            item.text =  `\u{27a1}   ${vnum}  +  ${c}  = ${calc}`//inclui conteudo no elemento criado(option)
          }
          if( voper == 'Subtração') { 
            var calc = vnum - c
            item.text =  `${vnum}  -  ${c}  = ${calc}`
          }
          if( voper == 'Multiplicação') { 
            var calc = vnum * c
            item.text =  `${vnum}  X  ${c}  = ${calc}`
          }
          if( voper == 'Divisão') { 
            var div = vnum
            var calc = vnum / c
            item.text =  `${vnum}  ÷  ${c + div}  = ${calc}`
          }

       
       c++

     }
     
  
    }

    
}

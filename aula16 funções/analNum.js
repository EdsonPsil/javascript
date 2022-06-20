
let num = document.getElementById('fnum')
let lista = document.getElementById('flist')
var res = document.querySelector('div#res')
let vnum = []

function isNumero(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
} else {
    return false
}
}


function inLista(n,l){
  if(l.indexOf(Number(n)) != -1){
  return true
} else{
  return false
}
}

function adNum(){
  if(isNumero(num.value) && !inLista(num.value, vnum)){
vnum.push(Number(num.value))
let item = document.createElement('option')
item.text = `valor ${num.value} adicionado`
lista.appendChild(item)
res.innerHTML = ''
}else{
  alert('Valor inválido ou já encontrado na lista')
}
//esse comando dentro da função limpa a caixa de texto 
num.value = ''
num.focus()
}
function finalizar(){
  if(vnum == 0){
    alert('Nenhum valor adicionado')
  }else{
  //var max = Math.max(...vnum)
  let min = Math.min(...vnum)
  var soma = 0


for(let c=0; c<vnum.length;c++) { 
  soma += vnum[c]   
}
res.innerHTML = `<h2>Análise das informações</h2>`
res.innerHTML += 
`Ao todo temos ${vnum.length} números cadastrados. <br\> 
O maior valor informado é: ${Math.max(...vnum)} <br\> 
O menor valor informado é: ${min} <br\> 
A soma de todos os números é: ${soma} <br\>
A média dos valores é:${soma/vnum.length}`
res.style.color = 'red'
res.style.border = '1px solid black'
res.style.background = 'yellow'
res.style.padding = '0px 20px'

  
}
}


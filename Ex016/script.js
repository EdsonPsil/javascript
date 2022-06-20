function contar(){
 var inicio = document.getElementById('inicio')
 var fim = document.getElementById('fim')
 var passo = document.getElementById('passo')
 var v_inicio = Number (inicio.value)
 var v_fim = Number (fim.value)
 var v_passo = Number(passo.value)

 
 
 if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    alert('[ERRO] falta valores..')
   
 }else{
    resul.innerHTML = `contando: <br/>`
    if(v_passo <= 0){
      alert('passo inválido! considerando número 1') 
      v_passo = 1
    }
    if(v_inicio < v_fim) { 
// contagem crescente
      for(var teste = v_inicio; teste <= v_fim; teste += v_passo){
        resul.innerHTML += `${teste} \u{1f449}`
       }
    } else{
// contagem descrescente    
        for(var teste = v_inicio;  teste >= v_fim;  teste -= v_passo){
        resul.innerHTML += ` ${teste} \u{1f449} `}  
 }
  resul.innerHTML += `\u{1f3c1}`

  }
 
}

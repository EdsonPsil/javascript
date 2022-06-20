console.log('(for) comando de repetição com variável de controle')
console.log('sintaxe: for(inicio;teste;incremento){}')


for(var c = 0; c <=10; c++){
  console.log(`escreva ${c}`)
  if(c%2==0){
    console.log(`${c} é numero par`)
  }else{
    console.log(`${c} é numero impar`)
  }
}

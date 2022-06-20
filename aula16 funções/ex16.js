function parimp(n)
{
 /* if(n % 2 == 0){
  console.log(`O número ${n} é par`)
  }else{
  console.log(`O número ${n} é impar`) 
  }
  parimp(8) // essa é a chamada da função
  */
  if(n % 2 == 0){
    return 'par'
  }else{
    return 'impar'
  }
}

console.log(`o numero  é`, parimp(5))


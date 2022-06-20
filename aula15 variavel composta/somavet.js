
let amigo = {nome:'JOSE', sexo:'M', peso: 85.4, engordar(p=0){
  console.log('engordou')
  this.peso += p

}}
amigo.engordar(5)

console.log(`${amigo.nome} pesa ${amigo.peso} e é do sexo ${amigo.sexo}`)

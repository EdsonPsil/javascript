function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora =  data.getHours()
var minuto = data.getMinutes()
msg.innerHTML = `Agora são: ${hora}:${minuto} horas`

if(hora >= 0 && hora < 12){
  img.src = 'manha1.webp'
  document.body.style.background = '#64b7e8'
  dia.innerHTML = 'Bom dia!'

 } else if(hora >= 12 && hora < 18){
  document.body.style.background = '#ff9c3f'
    img.src = 'tarde2.png'
    tarde.innerHTML = 'Boa tarde!'
    
  }else{
    img.src = 'noite1.png'
    document.body.style.background = '#0a3265'
    noite.innerHTML = 'Boa noite!'
  }
  
}

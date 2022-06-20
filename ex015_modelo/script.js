  function verificar( ){
    var data = new Date()
    var ano_at = data.getFullYear()
    var ano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if(ano.value.length == 0 || ano.value > ano_at){
     alert('[ERRO]')
    }else{
    
      var fsex = document.getElementsByName('radsex')
      var idade = ano_at - ano.value
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if(fsex[0].checked){
        genero = 'homem'
        res.style.backgroundColor = 'blue'
        if(idade < 12){
          img.setAttribute('src', 'menino.png')
        }else if(idade < 21){
          img.setAttribute('src', 'homenadolecente.png')
        }else if(idade < 50){
          img.setAttribute('src', 'homen.png')
        } else{
          img.setAttribute('src', 'homenidoso.png')
        } 
     } else if(fsex[1].checked){
        genero = 'mulher'
        res.style.backgroundColor = 'pink'
        if(idade < 12){
          img.setAttribute('src', 'menina.png')
        }else if(idade < 21){
          img.setAttribute('src', 'mulheradolecente.png')
        }else if(idade < 50){
          img.setAttribute('src', 'mulher.png')
        } else{
          img.setAttribute('src', 'mulheridosa.png')
        } 
        }
      
    res.style.textAlign = 'center'
    img.style.borderRadius = '50%'
    img.style.paddingTop = '10px'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos` 
    res.appendChild(img)
      
    
   }

  }

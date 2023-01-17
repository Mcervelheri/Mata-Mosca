var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMoscaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?','')

if (nivel === 'normal') {
    criaMoscaTempo = 1500
    tempo = 15

}else if (nivel === 'dificil') {
    criaMoscaTempo = 1000
    tempo = 25

}else if (nivel === 'extremo') {
    criaMoscaTempo = 750
    tempo = 40

}

function ajustaTamanhoPalcoJogo() {

    altura = window.innerHeight
    largura = window.innerWidth

}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {

    tempo--

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        document.location.href = 'vitoria.html'
    }else{

    document.getElementById('cronometro').innerHTML = tempo
}

}, 1000)

function posicaoAleatoria() {

    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove()

        console.log(vidas)
        if(vidas > 3) {

            document.location.href = 'fim_de_jogo.html'

        }else{
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            
            vidas++
        }
    }
    
    var posX = Math.floor(Math.random() * largura) - 90
    var posY = Math.floor(Math.random() * altura) - 90

    posX = posX < 0 ? 0 : posX
    posY = posY < 0 ? 0 : posY
        
    var mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosca.style.left = posX + 'px'
    mosca.style.top = posY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function() {
        this.remove()
    }
    
    document.body.appendChild(mosca)
    
}

function tamanhoAleatorio() {

    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosca1'

        case 1:    
            return 'mosca2'

        case 2:         
            return 'mosca3'

    }
}

function ladoAleatorio() {
    
    var classe = Math.floor(Math.random() * 2)
    
    switch (classe) {
        case 0:
            return 'ladoA'
    
        case 1:    
            return 'ladoB'

    
    }

}
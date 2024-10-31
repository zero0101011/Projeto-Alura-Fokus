const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const focoCurtoBt = document.querySelector('.app__card-button--curto');
const focoLongoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaInput = document.querySelector('#alternar-musica');
const timerBt = document.querySelector('#start-pause')

const musica = new Audio("/sons/luna-rise-part-one.mp3")
const somTimerPlay = new Audio('/sons/play.wav')
const somTimerPause = new Audio('/sons/pause.mp3')
const somTimerEnd = new Audio('/sons/beep.mp3')

musica.loop = true;

let tempoDecorridoEmSegundos = 5;
let intervaloId = null;


musicaInput.addEventListener('change', function () {
    if (musica.paused) {

        musica.play();

    } else (
        musica.pause()
    )
})


focoBt.addEventListener('click', function () {
    alterarContexto('foco')

    focoBt.classList.add('active')

})

focoCurtoBt.addEventListener('click', function () {
    alterarContexto('descanso-curto')

    focoCurtoBt.classList.add('active')
})

focoLongoBt.addEventListener('click', function () {
    alterarContexto('descanso-longo')

    focoLongoBt.classList.add('active')
})


function alterarContexto(contexto) {

    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
    })

    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)

    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `
         Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            
        `

            break;
        case 'descanso-curto':


            titulo.innerHTML = `
        Que tal dar uma respirada?  <strong class="app__title-strong"> Faça uma pausa curta! </strong>
        `


            break;
        case `descanso-longo`:

            titulo.innerHTML = `
        Hora de voltar à superfície.  <strong class="app__title-strong"> Faça uma pausa longa. </strong>

        `

            break;

        default:
            break;
    }

}


const contagemRegressiva = function () {
    
    
    if (tempoDecorridoEmSegundos <= 0) {
        zerar()
        somTimerEnd.play()
        alert('Tempo finalizado!')
        
        return
    }
    tempoDecorridoEmSegundos -= 1
    
    console.log('a contagem é '+ tempoDecorridoEmSegundos)
}

timerBt.addEventListener('click', iniciarOuPausar, )




function iniciarOuPausar() {
    
    if (intervaloId) {
        somTimerPause.play()
        zerar()
        
        return  
    }
    somTimerPlay.play()
    intervaloId = (setInterval(contagemRegressiva, 1000))
}

function zerar () {
    clearInterval(intervaloId);
    intervaloId = null;
    
    
}
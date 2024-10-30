const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const focoCurtoBt = document.querySelector('.app__card-button--curto');
const focoLongoBt = document.querySelector('.app__card-button--longo') ;
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botaoFoco = document.querySelector('.app__card-button--foco')


focoBt.addEventListener('click', function () {
alterarContexto('foco')


 

})

focoCurtoBt.addEventListener('click', function () {
    alterarContexto('descanso-curto')
})

focoLongoBt.addEventListener('click', function () {
  alterarContexto('descanso-longo')
})


function alterarContexto (contexto) {

    html.setAttribute('data-contexto',contexto)
    banner.setAttribute('src',`/imagens/${contexto}.png`)

    switch (contexto) {
        case 'foco': 
        titulo.innerHTML = `
         Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            
        `
        botaoFoco.removeAttribute('active')
            
            break;
        case 'descanso-curto' : 


        titulo.innerHTML = `
        Que tal dar uma respirada?  <strong class="app__title-strong"> Faça uma pausa curta! </strong>
        
        `

           break;
        case `descanso-longo` : 

        titulo.innerHTML = `
        Hora de voltar à superfície.  <strong class="app__title-strong"> Faça uma pausa longa. </strong>

        `
          break;

         default:
            break;
    }

}
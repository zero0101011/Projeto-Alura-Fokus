const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const focoCurtoBt = document.querySelector('.app__card-button--curto')
const focoLongoBt = document.querySelector('.app__card-button--longo') 
const banner = document.querySelector('.app__image')

focoBt.addEventListener('click', function () {
    html.setAttribute('data-contexto','foco')
    banner.setAttribute('src','/imagens/foco.png')
 

})

focoCurtoBt.addEventListener('click', function () {
    html.setAttribute('data-contexto','descanso-curto')
    banner.setAttribute('src','/imagens/descanso-curto.png')
})

focoLongoBt.addEventListener('click', function () {
    html.setAttribute('data-contexto', 'descanso-longo')
    banner.setAttribute('src', '/imagens/descanso-longo.png')
})
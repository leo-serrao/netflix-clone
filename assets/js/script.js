// ------------- FUNCTION P/ ABRIR A PESQUISA NO HEADER ------------- //

function abrePesquisa() {
  div.classList.toggle('ativa')
  input.classList.toggle('ativo')
  linha.classList.toggle('ativada')
  lupa.classList.toggle('ligada')
}

const lupa = document.getElementById('lupa')
const div = document.getElementById('pesquisa')
const input = document.getElementById('input')
const linha = document.getElementById('linha')

lupa.addEventListener('click', abrePesquisa)

// ------------- FUNCTION P/ HEADER FICAR VISIVIL AO SCROLLAR ------------- //

const nav = document.getElementById('container')

window.addEventListener('scroll', function (event) {
  if (window.pageYOffset > 80) {
    nav.style.background = '#141414'
  } else {
    nav.style.background = 'transparent'
  }
})

// ------------- FUNCTION P/ ABRIR POP UP DE INFO ------------- //

const infoBtn = document.getElementsByClassName('info')[0]
const popup = document.getElementsByClassName('popup-wraper')[0]
const closeBtn = document.getElementsByClassName('close')[0]

infoBtn.addEventListener('click', () => {
  popup.style.display = 'flex'
})

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none'
})

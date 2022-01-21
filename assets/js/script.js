function abrePesquisa() {
  div.classList.toggle('ativado')
  input.classList.toggle('ativada')
}

const lupa = document.getElementById('lupa')
const div = document.getElementById('icon')
const input = document.getElementById('search')

lupa.addEventListener('click', abrePesquisa)

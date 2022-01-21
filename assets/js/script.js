function abrePesquisa() {
  div.classList.toggle('ativa')
  input.classList.toggle('ativo')
  linha.classList.toggle('ativada')
}

const lupa = document.getElementById('lupa')
const div = document.getElementById('pesquisa')
const input = document.getElementById('input')
const linha = document.getElementById('linha')

lupa.addEventListener('click', abrePesquisa)

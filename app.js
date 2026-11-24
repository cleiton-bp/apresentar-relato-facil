const $ = (s) => document.querySelector(s)
const $$ = (s) => document.querySelectorAll(s)

// Cada marcador do index.html é trocado pelo arquivo de mesmo nome em componentes/.
async function carregarComponentes() {
  for (const lugar of $$('[data-componente]')) {
    const resposta = await fetch(`componentes/${lugar.dataset.componente}.html`)
    lugar.outerHTML = await resposta.text()
  }
}

// Depois que a tela está montada, cada botão ganha o seu comportamento.
function ligarComportamentos() {
  $('#comecar').onclick = () => $('#cadastro').scrollIntoView()

  $$('.periodo button').forEach((b) => {
    b.onclick = () => {
      $$('.periodo button').forEach((x) => x.classList.toggle('ativo', x === b))
      $$('.preco').forEach((p) => {
        p.textContent = `R$ ${b.dataset.anual === undefined ? p.dataset.v : Math.round(p.dataset.valor * 0.8)}`
      })
    }
  })

  $$('[data-plano]').forEach((b) => {
    b.onclick = () => ($('#aviso').textContent = `Plano ${b.dataset.nome} escolhido.`)
  })

  $('#form').onsubmit = (e) => {
    e.preventDefault()
    $('#retorno').textContent = 'Ops! Algo deu errado. Erro 500: falha interna do servidor.'
  }

  $('#abrir-demo').onclick = () => $('#modal').showModal()
  $('.fechar').onclick = () => $('#modal').classList.add('fechando')

  $('#confirmar').onclick = () => {
    $('#retorno-demo').textContent = 'Ops! Nossa agenda tirou férias. Erro 500: falha interna do servidor.'
  }
}

carregarComponentes().then(ligarComportamentos)

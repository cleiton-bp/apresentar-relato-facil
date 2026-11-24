# Página de exemplo

Página estática, fora do git.

```
index.html        a lista das partes da tela, na ordem em que aparecem
estilo.css        o visual
app.js            carrega as partes e liga os botões
componentes/      uma parte da tela por arquivo
  topo.html         marca, menu e "Agendar demonstração"
  inicio.html       título e "Começar grátis"
  precos.html       mensal ou anual e os três planos
  contato.html      o formulário
  rodape.html       os links do fim da página
  agendamento.html  o modal de agendar demonstração
```

As partes são carregadas pelo navegador, então a página precisa ser aberta por um servidor (não funciona abrindo o arquivo direto).

Para usar: publique a pasta, autorize o endereço no projeto e cole a linha de instalação no lugar de `<!-- script -->`, no `<head>`.

Para testar no computador: `python3 -m http.server 4120` dentro da pasta.

## O que não funciona

1. "Começar grátis" não responde.
2. Em Preços, "Anual" mostra R$ NaN.
3. Em Preços, "Escolher" diz "Plano undefined escolhido".
4. O contato sempre mostra "Erro 500: falha interna do servidor".
5. Em "Agendar demonstração", o × não fecha (só a tecla Esc).
6. "Confirmar horário" sempre mostra "Nossa agenda tirou férias. Erro 500".
7. No celular, a página rola para o lado.
8. Os links do rodapé dão página não encontrada.

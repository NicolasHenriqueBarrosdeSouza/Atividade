document.addEventListener('DOMContentLoaded', function() {
  var enviarBtn = document.getElementById('enviarBtn');
  if (enviarBtn) {
    enviarBtn.addEventListener('click', imprimeConteudo);
  }
});

function imprimeConteudo() {
  var nome = document.getElementById('nome').value;
  if (nome.length > 100) {
    nome = nome.slice(0, 100); // Limita o texto a 100 caracteres
    document.getElementById('nome').value = nome;
  }

  var conteudoElement = document.getElementById('conteudo');
  if (conteudoElement) {
    conteudoElement.innerText = "" + nome+"\n";
  } else {
    console.error("Erro.");
  }
}
fetch('http://localhost:3030/supermercado')
  .then((resposta) => resposta.json())
  .then((dados) => {
    console.log(dados);
  });

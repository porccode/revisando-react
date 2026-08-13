const http = require('http');

const funcionarios = [
  {
    id: 1,
    nome: 'Carlos',
    presente: false,
  },
  {
    id: 2,
    nome: 'Mariana',
    presente: false,
  },
  {
    id: 3,
    nome: 'Pedro',
    presente: false,
  },
];

const servidor = http.createServer(function (requisicao, resposta) {
  resposta.setHeader('Access-Control-Allow-Origin', '*');
  resposta.setHeader('Content-Type', 'application/json');

  if (requisicao.url === '/funcionarios') {
    resposta.end(JSON.stringify(funcionarios));
  } else {
    resposta.statusCode = 404;

    resposta.end(
      JSON.stringify({
        mensagem: 'Rota não encontrada',
      }),
    );
  }
});

servidor.listen(3030, function () {
  console.log('API funcionando em http://localhost:3030');
});

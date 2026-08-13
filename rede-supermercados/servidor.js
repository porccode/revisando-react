const http = require('http');

const supermercado = {
  nome: 'Supermercado Central',
  dono: 'Jackson',

  produtos: [
    {
      nome: 'Arroz',
      preco: 25,
    },
    {
      nome: 'Feijão',
      preco: 30,
    },
  ],
};

const servidor = http.createServer((requiscao, resposta) => {
  resposta.setHeader('Access-Control-Allow-Origin', '*');
  if (requiscao.url === '/supermercado') {
    resposta.writeHead(200, {
      'Content-Type': 'application/json',
    });
    resposta.end(JSON.stringify(supermercado));
  }
});

servidor.listen(3030, () => {
  console.log('API funcionando em http://localhost:3030');
});

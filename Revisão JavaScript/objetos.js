// const uppterName = (name) => name.toUpperCase();
// console.log(uppterName('Jackson'));

// function handleMouse(event) {
//   const { clientX, clientY } = event;
//   console.log(clientX, clientY);
// }

// document.addEventListener('click', handleMouse);

function mostrarLista(empresa, cliente) {
  cliente.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}

mostrarLista('Snake', ['Lucas', 'Thiago', 'Pedro']);

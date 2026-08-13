fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then((responde) => responde.json())
  .then((json) => {
    console.log(json);
  });

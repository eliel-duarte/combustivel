function obterDados(url) {
    fetch('http://localhost:3000/abastecer')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }
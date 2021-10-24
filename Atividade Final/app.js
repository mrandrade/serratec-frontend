const URL = "https://randomuser.me/api/?results=5";
function mostraCards() {
  fetch(URL)
    .then((resposta) => resposta.json())
    .then(function (resultado) {
      var container = document.getElementById("listaClientes");
      for (let i = 0; i < resultado.results.length; i++) {
        var div = document.createElement("div");
        imagem = resultado.results[i].picture.large;
        nome =
          resultado.results[i].name.title +
          " " +
          resultado.results[i].name.first +
          " " +
          resultado.results[i].name.last;
        descricao = resultado.results[i].location.timezone.description;
        div.innerHTML = `<div class="col-5"><div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${imagem}" alt="Imagem ${i + 1}">
            <div class="card-body">
                <h5 class="card-title">${nome}</h5>
                <p class="card-text">${descricao}</p>
                <a href="clientes.html" class="btn btn-primary new-button-color">Ver mais...</a>
            </div>
        </div>
        </div>`;
        container.appendChild(div);
      }
    })
    .catch(function (error) {
      console.log("Não foi possível fazer a requisição", error);
    });
}

window.onload = async () => {
  let cards = await mostraCards();
};

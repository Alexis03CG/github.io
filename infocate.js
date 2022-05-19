function consultarCategoria() {
    const urlParams = new URLSearchParams(window.location.search);
    const idCategoria = urlParams.get("id");

    const dataForSelect = {
        operation: "select",
        table: "Categorias",
        key: idCategoria
    };

    const idImplementacion = "AKfycbzzgo4O32CMRnnYKbOFuKD-KqAvB7-EinmzhY_-IodMEu5Db-4EjPZjbustUaXGcVDgQQ";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarCategoriaTerminado);

}

function consultarCategoriaTerminado(response)  {

    document.getElementById("categoria").innerHTML = response.value.Categoria;

    const dataForSelect = {
        operation: "select",
        table: "Noticias"
    };

    const idImplementacion = "AKfycbzzgo4O32CMRnnYKbOFuKD-KqAvB7-EinmzhY_-IodMEu5Db-4EjPZjbustUaXGcVDgQQ";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarCategoriasDeNotTerminado);
}

function consultarCategoriasDeNotTerminado(response) {

    const urlParams = new URLSearchParams(window.location.search);
    const idCategoria = urlParams.get("id");

    for (let i = 0; i < response.values.length; i++) {
        if (idCategoria == response.values[i].IDCategoria) {
            let divNot = document.createElement("div");
            divNot.className="resultado";

            let h1Titulo = document.createElement("h2");
            h1Titulo.innerHTML = response.values[i].Titulo; 

            divNot.append(h1Titulo);

            let h4Fecha = document.createElement("h4");
            h4Fecha.innerHTML = response.values[i].Fecha;
            divNot.append(h4Fecha);

            let imagen = document.createElement("img");
            imagen.setAttribute("src", "imágenes/" + response.values[i].Imagen);

            divNot.append(imagen);


            let h4Subtitulo = document.createElement("h4");
            h4Subtitulo.innerHTML = response.values[i].Subtitulo;
            divNot.append(h4Subtitulo);

            let enlace = document.createElement("a");
            enlace.setAttribute("href", "infoPF.html?id=" + response.values[i].ID);
            enlace.innerHTML = "Leer";

            let parrafoParaElEnlace = document.createElement("p");
            parrafoParaElEnlace.append(enlace);

            divNot.append(parrafoParaElEnlace);

            document.getElementById("resultado").append(divNot);
        }
    }
}


consultarCategoria();
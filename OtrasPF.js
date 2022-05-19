function consultarPF() {
    const dataForSelect = {
        operation: "select",
        table: "Categorias"
    };

    const idImplementacion = "AKfycbzzgo4O32CMRnnYKbOFuKD-KqAvB7-EinmzhY_-IodMEu5Db-4EjPZjbustUaXGcVDgQQ";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarInfoDePFTerminado);
}

function consultarInfoDePFTerminado(response) {
    
    let divnots = document.createElement("div");
    divnots.className = "nots";

    for (let i = 0; i < response.values.length; i++) {
        
        let divnot = document.createElement("div");
        divnot.className = "not";
        divnot.setAttribute("onclick", "clickSobrenot(" + response.values[i].ID + ")");

        let enlace = document.createElement("a");
        enlace.setAttribute("href", "infocate.html?id=" + response.values[i].IDCategoria);
        enlace.innerHTML = response.values[i].Categoria;

        let parrafoParaElEnlace = document.createElement("p");
        parrafoParaElEnlace.append(enlace);

        divnot.append(parrafoParaElEnlace);

        divnots.append(divnot);
    }

    document.getElementById("resultado").append(divnots);
}

function clickSobrenot(id) {
    window.location = "infocate.html?id=" + id;
}

consultarPF();
function consultarPF() {
    const dataForSelect = {
        operation: "select",
        table: "Noticias"
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

        
        let h3Titulo = document.createElement("h2");
        h3Titulo.innerHTML = response.values[i].Titulo; 

        divnot.append(h3Titulo);

        let h4Fecha = document.createElement("h4");
        h4Fecha.innerHTML = response.values[i].Fecha;
        divnot.append(h4Fecha);

        let imagen = document.createElement("img");
        imagen.setAttribute("src", "imágenes/" + response.values[i].Imagen);

        divnot.append(imagen);


        let h4Subtitulo = document.createElement("h4");
        h4Subtitulo.innerHTML = response.values[i].Subtitulo;
        divnot.append(h4Subtitulo);


        let enlace = document.createElement("a");
        enlace.setAttribute("href", "infoPF.html?id=" + response.values[i].ID);
        enlace.innerHTML = "Leer";

        let parrafoParaElEnlace = document.createElement("p");
        parrafoParaElEnlace.append(enlace);

        divnot.append(parrafoParaElEnlace);

        divnots.append(divnot);
    }

    document.getElementById("resultado").append(divnots);
}

function clickSobrenot(id) {
    window.location = "infoPF.html?id=" + id;
}

consultarPF();
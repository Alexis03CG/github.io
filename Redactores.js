function consultarPF() {
    const dataForSelect = {
        operation: "select",
        table: "Redactores"
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
        divnot.className = "w3-card-4";
        // divnot.setAttribute("onclick", "clickSobrenot(" + response.values[i].IDRedactor + ")");
        

        let h2Titulo = document.createElement("h2");
        h2Titulo.innerHTML = response.values[i].Nombre; 
        h2Titulo.className = "w3-container w3-blue";
        divnot.append(h2Titulo);

        let h4Apellidos = document.createElement("h4");
        h4Apellidos.innerHTML = response.values[i].Apellidos;
        divnot.append(h4Apellidos);

        let imagen = document.createElement("img");
        imagen.setAttribute("src", "imágenes/" + response.values[i].Foto);

        divnot.append(imagen);

        let h4Edad = document.createElement("h4");
        h4Edad.innerHTML = "Edad: "+response.values[i].edad;
        divnot.append(h4Edad);


        let h4Subtitulo = document.createElement("h4");
        h4Subtitulo.innerHTML = response.values[i].Descripción;
        divnot.append(h4Subtitulo);

        let enlace = document.createElement("a");
        enlace.setAttribute("href", "Redact.html?id=" + response.values[i].IDRedactor);
        enlace.innerHTML = "Noticias Redactadas";

        let parrafoParaElEnlace = document.createElement("p");
        parrafoParaElEnlace.append(enlace);

        parrafoParaElEnlace.className = "w3-container w3-blue";

        divnot.append(parrafoParaElEnlace);

        divnots.append(divnot);
    }

    document.getElementById("w3-card-4").append(divnots);
}

function clickSobrenot(id) {
    window.location = "Redact.html?id=" + id;
}

consultarPF();
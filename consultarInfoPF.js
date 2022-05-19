function consultarInfoDePF() {

    const urlParams = new URLSearchParams(window.location.search);
    const idnot = urlParams.get("id");

    const dataForSelect = {
        operation: "select",
        table: "Noticias",
        key: idnot
    };

    const idImplementacion = "AKfycbzzgo4O32CMRnnYKbOFuKD-KqAvB7-EinmzhY_-IodMEu5Db-4EjPZjbustUaXGcVDgQQ";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarInfoDePFTerminado);
}

function consultarInfoDePFTerminado(response) {
    document.getElementById("Titulo").innerHTML = response.value.Titulo;
    document.getElementById("Subtitulo").innerHTML = response.value.Subtitulo ;
    document.getElementById("imagen").setAttribute("src", "imágenes/" + response.value.Imagen);
    document.getElementById("Cuerpo").innerHTML = response.value.Cuerpo
    document.getElementById("Categoria").innerHTML = "Categoría: "+response.value.IDCategoria;
    document.getElementById("Redactor").innerHTML = "Redactado por: "+response.value.IDRedactor;
    document.getElementById("Fecha").innerHTML = response.value.Fecha;
}

consultarInfoDePF();


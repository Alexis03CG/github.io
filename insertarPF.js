function insertarPF() {

    let not = {
        ID: document.getElementById("ID").value,
        Titulo: document.getElementById("Titulo").value,
        Subtitulo: document.getElementById("Subtitulo").value,
        Cuerpo: document.getElementById("Cuerpo").value,
        Fecha: document.getElementById("Fecha").value,
        Categoria: document.getElementById("Categoria").value,
        imagen: document.getElementById("imagen").value,
        Redactor: document.getElementById("Redactor").value,
    };

    const dataForInsert = {
        operation: "insert",
        table: "Noticias",
        object: not
    };

    const idImplementacion = "AKfycbzzgo4O32CMRnnYKbOFuKD-KqAvB7-EinmzhY_-IodMEu5Db-4EjPZjbustUaXGcVDgQQ";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForInsert,
        insertarPFTerminado);
}

function insertarPFTerminado(response) {
    console.log(response);
}


insertarPF();
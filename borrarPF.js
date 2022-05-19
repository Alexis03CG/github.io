function borrar() {
    const idGoogleSheet="AKfycbzzgo4O32CMRnnYKbOFuKD-KqAvB7-EinmzhY_-IodMEu5Db-4EjPZjbustUaXGcVDgQQ";
    const tableName     = "Noticias";
    let key           = document.getElementById("Titulo").value;
    
    const dataForSelect = {
        operation: "delete",
        table: tableName,
        key: key
    };

    document.getElementById("error").innerHTML = "Esperando resultado...";
    document.getElementById("message").innerHTML = "Esperando resultado...";

    GoogleSheetDataBaseOperation(
        idGoogleSheet,
        dataForSelect,
        borrarFinished);
}

function borrarFinished(response) {
    document.getElementById("error").innerHTML = response.error;
    document.getElementById("message").innerHTML = response.message;
}


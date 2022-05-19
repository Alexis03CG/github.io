function crearcuenta() {

    let not = {
        ID: document.getElementById("ID").value,
        Nombre: document.getElementById("Nombre").value,
        Contraseña: document.getElementById("Contraseña").value,
        Redactor: document.getElementById("Redactor").value,
    };
    const dataForInsert = {
        operation: "insert",
        table: "Usuarios",
        object: not
    };

    const idImplementacion = "AKfycbzzgo4O32CMRnnYKbOFuKD-KqAvB7-EinmzhY_-IodMEu5Db-4EjPZjbustUaXGcVDgQQ";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForInsert,
        crearcuentaTerminado);


    
}

function crearcuentaTerminado(response) {
    console.log(response);
    
}

function cuentacreada() {
    window.alert("¡Cuenta creada! Iniciando sesión...")
    window.location = "PF.html"

}


crearcuenta();
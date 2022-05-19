function Entrar() {
    const dataForSelect = {
        operation: "select",
        table: "Usuarios"
    };

    const idImplementacion = "AKfycbzzgo4O32CMRnnYKbOFuKD-KqAvB7-EinmzhY_-IodMEu5Db-4EjPZjbustUaXGcVDgQQ";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        EntrarTerminado);
}

function EntrarTerminado(response) {
    let userFound = false;

    for (let i = 0; i < response.values.length; i++) {
        let Contra = document.getElementById("Cont").value;
        let Usuario = document.getElementById("Usu").value;
        // let Redactor = document.getElementById("Redact").value;
        

        if (response.values[i].Nombre == Usuario && response.values[i].Contraseña == Contra  && response.values[i].Redactor == "Si") {
            console.log("Correcto");
            userFound = true;
            window.location = "PF.html";
        }

        else if (response.values[i].Nombre == Usuario && response.values[i].Contraseña == Contra) {
            console.log("Correcto");
            userFound = true;
            window.location = "PFBasic.html";
        }
    }

    if (userFound == false) {
        window.alert("Usuario y/o contraseña incorrectos.");
    }
}
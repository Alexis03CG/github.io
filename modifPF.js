function update() {
    let idGoogleSheet = document.getElementById("idGoogleSheet").value;
    let key           = document.getElementById("key").value;
    let tableName     = document.getElementById("tableName").value;
    let columnName1   = document.getElementById("columnName1").value;
    let columnValue1  = document.getElementById("columnValue1").value;
    let columnName2   = document.getElementById("columnName2").value;
    let columnValue2  = document.getElementById("columnValue2").value;
    let columnName3   = document.getElementById("columnName3").value;
    let columnValue3  = document.getElementById("columnValue3").value;
    let columnName4   = document.getElementById("columnName4").value;
    let columnValue4  = document.getElementById("columnValue4").value;
    let columnName5   = document.getElementById("columnName5").value;
    let columnValue5  = document.getElementById("columnValue5").value;
    let columnName6   = document.getElementById("columnName6").value;
    let columnValue6  = document.getElementById("columnValue6").value;
    let columnName7   = document.getElementById("columnName7").value;
    let columnValue7  = document.getElementById("columnValue7").value;

    
    const newRow = {};

    if (columnName1) {
        newRow[columnName1] = columnValue1;
    }

    if (columnName2) {
        newRow[columnName2] = columnValue2;
    }

    if (columnName3) {
        newRow[columnName3] = columnValue3;
    }

    if (columnName4) {
        newRow[columnName4] = columnValue4;
    }

    if (columnName5) {
        newRow[columnName5] = columnValue5;
    }

    if (columnName6) {
        newRow[columnName6] = columnValue6;
    }

    if (columnName7) {
        newRow[columnName7] = columnValue7;
    }


    const dataForSelect = {
        operation: "update",
        table: tableName,
        key: key,
        object: newRow
    };

    document.getElementById("error").innerHTML = "Esperando resultado...";
    document.getElementById("message").innerHTML = "Esperando resultado...";

    GoogleSheetDataBaseOperation(
        idGoogleSheet,
        dataForSelect,
        updateFinished);
}

function updateFinished(response) {
    document.getElementById("error").innerHTML = response.error;
    document.getElementById("message").innerHTML = response.message;
}


function login() {
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("clave").value;

    // Estructura IF
    if (user === "alumno" && pass === "2025") {
        alert("Bienvenido, " + user);
        document.getElementById("contenido").style.display = "block";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

function calcular() {
    let val1 = parseFloat(document.getElementById("val1").value);
    let val2 = parseFloat(document.getElementById("val2").value);
    let operacion = document.querySelector('input[name="op"]:checked');

    if (!operacion) {
        alert("Selecciona una operación");
        return;
    }

    let resultado = 0;

    // Estructura SWITCH (case)
    switch (operacion.value) {
        case "suma": resultado = val1 + val2; break;
        case "resta": resultado = val1 - val2; break;
        case "multi": resultado = val1 * val2; break;
        case "div": 
            if (val2 !== 0) resultado = val1 / val2;
            else resultado = "No se puede dividir entre 0";
            break;
        default: resultado = "Operación inválida";
    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function mostrarGustos() {
    let gustos = [];

    // Estructura FOR
    let checks = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < checks.length; i++) {
        if (checks[i].checked) gustos.push(checks[i].id);
    }

    document.getElementById("gustos").innerText = 
        gustos.length > 0 ? "Te gusta: " + gustos.join(", ") : "No seleccionaste nada";
}

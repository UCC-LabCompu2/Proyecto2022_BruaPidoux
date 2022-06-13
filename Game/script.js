


function decision(x) {
    var contexto = document.getElementById('contexto')
    var button1 = document.getElementById('choice1_btn')
    var button2 = document.getElementById('choice2_btn')

    switch (x) {
        case 0:
            window.location.href = "perdiste.html"
            break
        case 11:
            window.location.href = "ganaste.html"
            break
        case 1:
            contexto.innerHTML = "Te escondes detrás de una carreta abandonada"
            button1.value = "BUSCAR AL REY"
            button1.onclick = decision(3);
            button2.value = "CORTAR LA ELECTRICIDAD"
            button2.onclick = decision(4);
            break
        case 2:
            contexto.innerHTML = "Estas en el techo del castillo"
            button1.value = "USAR LA SALIDA DE EMERGENCIA"
            button1.onclick = decision(7);
            button2.value = "ENTRAR POR EL BALCON"
            button2.onclick = decision(0);
            break
        case 3:
            contexto.innerHTML = "Se escucha la voz del rey pidiendo ayuda al final del pasillo"
            button1.value = "CORRER PARA SALVARLO"
            button1.onclick = decision(5);
            button2.value = "CAMINAR CON CAUTELA"
            button2.onclick = decision(6);
            break
        case 4:
            contexto.innerHTML = "Los guardias están en alerta por el corte de energía pero no pueden ver bien"
            button1.value = "SUBIR LAS ESCALERAS"
            button1.onclick = decision(0);
            button2.value = "SEGUIR UN PASILLO LARGO"
            button2.onclick = decision(3);
            break
        case 5:
            contexto.innerHTML = "¡Encontraste al rey! pero hiciste mucho ruido"
            button1.value = "VOLVER CON CUIDADO POR DONDE ENTRASTE"
            button1.onclick = decision(0);
            button2.value = "ROMPER LA VENTANA Y SALTAR"
            button2.onclick = decision(01);
            break
        case 6:
            contexto.innerHTML = "¡Encontraste al rey!"
            button1.value = "VOLVER CON CUIDADO POR DONDE ENTRASTE"
            button1.onclick = decision(01);
            button2.value = "ROMPER LA VENTANA Y SALTAR"
            button2.onclick = decision(0);
            break
        case 7:
            contexto.innerHTML = "Lograste entrar al castillo sin ser descubierto"
            button1.value = "INVESTIGAR EL PRIMER PISO"
            button1.onclick = decision(8);
            button2.value = "BAJAR A PLANTA BAJA"
            button2.onclick = decision(3);
            break
        case 8:
            contexto.innerHTML = "Se escuchan murmuros en una habitación"
            button1.value = "ENTRAR"
            button1.onclick = decision(0);
            button2.value = "ESCONDERSE EN LA HABITACION DE AL LADO"
            button2.onclick = decision(0);
            break
        case 9:

        case 10:
    }

}

function fin() {
    window.location.href = "perdiste.html"
}
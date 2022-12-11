function drawCanvas(canvas) {
    var canvas = document.getElementById('progressBar');
    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 0, 0, img.width * 0.06, img.height * 0.06)
    }
    img.src = 'pictures/helmet.png';
}

function fillBar(x){
    var canvas = document.getElementById('progressBar');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, x* ctx.canvas.width/100, ctx.canvas.height);
}

function char_pic(x){
    var canvas = document.getElementById('progressBar');
    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img, x* ctx.canvas.width/100 -15, 0, img.width * 0.06, img.height * 0.06)
    }
    img.src = 'pictures/helmet.png';
}

function decision(x) {
    var contexto = document.getElementById('contexto')
    var button1 = document.getElementById('choice1_btn')
    var button2 = document.getElementById('choice2_btn')

    switch (x) {
        case '0':
            window.location.href = "perdiste.html"
            break
        case '01':
            window.location.href = "ganaste.html"
            break
        case '1':
            contexto.innerHTML = "Te escondes detrás de una carreta abandonada"
            button1.value = "BUSCAR AL REY"
            button1.onclick = function() {
                decision('3')
            };
            button2.value = "CORTAR LA ELECTRICIDAD"
            button2.onclick = function() {
                decision('4')
            };
            fillBar(20);
            char_pic(20);
            break
        case '2':
            contexto.innerHTML = "Estas en el techo del castillo"
            button1.value = "USAR LA SALIDA DE EMERGENCIA"
            button1.onclick = function() {
                decision('7')
            };
            button2.value = "ENTRAR POR EL BALCON"
            button2.onclick = function() {
                decision('13')
            };
            fillBar(20);
            char_pic(20);
            break
        case '3':
            contexto.innerHTML = "Se escucha la voz del rey pidiendo ayuda al final del pasillo"
            button1.value = "CORRER PARA SALVARLO"
            button1.onclick = function() {
                decision('5')
            };
            button2.value = "CAMINAR CON CAUTELA"
            button2.onclick = function() {
                decision('6')
            };
            fillBar(55);
            char_pic(55);
            break
        case '4':
            contexto.innerHTML = "Los guardias están en alerta por el corte de energía pero no pueden ver bien"
            button1.value = "SUBIR LAS ESCALERAS"
            button1.onclick = function() {
                decision('0')
            };
            button2.value = "SEGUIR UN PASILLO LARGO"
            button2.onclick = function() {
                decision('3')
            };
            fillBar(40);
            char_pic(40);
            break
        case '5':
            contexto.innerHTML = "¡Encontraste al rey! pero hiciste mucho ruido"
            button1.value = "VOLVER CON CUIDADO POR DONDE ENTRASTE"
            button1.onclick = function() {
                decision('0')
            };
            button2.value = "ROMPER LA VENTANA Y SALTAR"
            button2.onclick = function() {
                decision('01')
            };
            fillBar(85);
            char_pic(85);
            break
        case '6':
            contexto.innerHTML = "¡Encontraste al rey!"
            button1.value = "VOLVER CON CUIDADO POR DONDE ENTRASTE"
            button1.onclick = function() {
                decision('01')
            };
            button2.value = "ROMPER LA VENTANA Y SALTAR"
            button2.onclick = function() {
                decision('0')
            };
            fillBar(85);
            char_pic(85);
            break
        case '7':
            contexto.innerHTML = "Lograste entrar al castillo sin ser descubierto"
            button1.value = "INVESTIGAR EL PRIMER PISO"
            button1.onclick = function() {
                decision('8')
            };
            button2.value = "BAJAR A PLANTA BAJA"
            button2.onclick = function() {
                decision('3')
            };
            fillBar(40);
            char_pic(40);
            break
        case '8':
            contexto.innerHTML = "Se escuchan murmuros en una habitación"
            button1.value = "ENTRAR"
            button1.onclick = function() {
                decision('0')
            };
            button2.value = "ESCONDERSE EN LA HABITACION DE AL LADO"
            button2.onclick = function() {
                decision('9')
            };
            fillBar(45);
            char_pic(45);
            break
        case '9':
            contexto.innerHTML = "Alguien sale al pasillo"
            button1.value = "SALIR A VER QUIEN ES"
            button1.onclick = function() {
                decision('10')
            };
            button2.value = "SEGUIR ESCONDIDO"
            button2.onclick = function() {
                decision('11')
            };
            fillBar(60);
            char_pic(60);
            break
        case '10':
            contexto.innerHTML = "¡Es el rey!"
            button1.value = "IRSE POR EL TECHO"
            button1.onclick = function() {
                decision('01')
            };
            button2.value = "SALIR POR LA VENTANA"
            button2.onclick = function() {
                decision('0')
            };
            fillBar(80);
            char_pic(80);
            break
        case '11':
            contexto.innerHTML = "Quedó la puerta de la habitación del rey abierta"
            button1.value = "ENTRAR"
            button1.onclick = function() {
                decision('0')
            };
            button2.value = "QUEDARSE"
            button2.onclick = function() {
                decision('12')
            };
            fillBar(70);
            char_pic(70);
            break
        case '12':
            contexto.innerHTML = "Un guardia escuchó un ruido y se acerca a investigar"
            button1.value = "HUIR"
            button1.onclick = function() {
                decision('0')
            };
            button2.value = "QUEDARSE"
            button2.onclick = function() {
                decision('0')
            };
            fillBar(75);
            char_pic(75);
            break
        case '13':
            contexto.innerHTML = "Un guardia escuchó un ruido y se acerca a investigar"
            button1.value = "HUIR Y USAR LA OTRA ENTRADA"
            button1.onclick = function() {
                decision('7')
            };
            button2.value = "ESCONDERSE"
            button2.onclick = function() {
                decision('0')
            };
            fillBar(35);
            char_pic(35);
            break
    }
}

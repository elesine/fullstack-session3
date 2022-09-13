function cadena() {
    var resultado = "";
    do {
        var cadena = prompt('ingresar el día');
        if (resultado == '') {
            resultado = resultado + cadena;
        } else {
            resultado = resultado + ' / ' + cadena;
        }
    } while (confirm('Deseas continuar?'));

    document.getElementById('content').innerHTML = resultado;
}
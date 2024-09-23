function calcularMedia() {
    
    var n1 = parseFloat(document.getElementById("n1").value) || 0;
    var n2 = parseFloat(document.getElementById("n2").value) || 0;
    var n3 = parseFloat(document.getElementById("n3").value) || 0;
    var n4 = parseFloat(document.getElementById("n4").value) || 0;
   
    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
        document.getElementById("res").innerHTML = 'Por favor, insira todas as notas corretamente.';
        return;
    }

    
    var res = (n1 + n2 + n3 + n4) / 4;
    
    document.getElementById("res").innerHTML = 'A média é: ' + res.toFixed(2);
    
    if (res >= 6) {
        document.getElementById("res").innerHTML += '<br>Você passou!';
    } else {
        document.getElementById("res").innerHTML += '<br>Você não passou.';
    }
}
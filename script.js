function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Função para calcular o tempo até o aniversário
function calcularTempoAteAniversario(dataAniversario) {
    var hoje = new Date();
    var aniversarioEsteAno = new Date(hoje.getFullYear(), dataAniversario.getMonth(), dataAniversario.getDate());
    if (hoje > aniversarioEsteAno) {
        aniversarioEsteAno.setFullYear(aniversarioEsteAno.getFullYear() + 1);
    }
    var diferenca = aniversarioEsteAno - hoje;
    var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    return dias;
}

// Defina as datas dos aniversários
var seuAniversario = new Date("2024-05-05T10:03");
var aniversarioColega1 = new Date("2024-09-11T10:03");
var aniversarioColega2 = new Date("2024-05-24T10:03");

// Exiba os tempos até os aniversários
document.getElementById("seuAniversarioCountdown").innerHTML = calcularTempoAteAniversario(seuAniversario) + " dias";
document.getElementById("colega1Countdown").innerHTML = calcularTempoAteAniversario(aniversarioColega1) + " dias";
document.getElementById("colega2Countdown").innerHTML = calcularTempoAteAniversario(aniversarioColega2) + " dias";

var pontosJogador = 0;
var pontosIa = 0;

function jogarPedra() {
    jogar(0);
}

function jogarPapel() {
    jogar(1);
}

function jogarTesoura() {
    jogar(2);
}

function jogar(op) {
    var opAi = Math.round(Math.random() * 2);
    $("#div_jogada").hide();
    $("#img_loading").show();
    $("#img_gon").attr("src", "img/gon_jokenpo.gif");
    $("#resultado").html("Carregando...").css("color", "#222");
    $("#btn_reiniciar").attr("disabled", "disabled");
    setTimeout(function () {
        if (op == opAi) {
            resultado(0);
        } else if ((op == 0 && opAi == 1) || (op == 1 && opAi == 2) || (op == 2 && opAi == 0)) {
            resultado(1);
        } else {
            resultado(2);
        }
        $("#div_jogada").show();
        $("#img_loading").hide();
        $("#img_gon").attr("src", "");
        $("#btn_reiniciar").removeAttr("disabled");
    }, 1890);
}

function resultado(result) {
    switch (result) {
        case 0:
            $("#resultado").html("Empate!").css("color", "#00695f");
            break;
        case 1:
            $("#resultado").html("Você perdeu!").css("color", "red");
            pontosIa = pontosIa + 1;
            $("#pontos_ia").val(pontosIa);
            break;
        case 2:
            $("#resultado").html("Você ganhou!").css("color", "green");
            pontosJogador = pontosJogador + 1;
            $("#pontos_jogador").val(pontosJogador);
            break;
    }
}

function reiniciar() {
    pontosIa = 0;
    pontosJogador = 0;
    $("#pontos_ia").val(pontosIa);
    $("#pontos_jogador").val(pontosJogador);
    $("#resultado").html("Faça a sua jogada").css("color", "#222");
}
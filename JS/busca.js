function atualizarclasse() {
    var DClasse = document.getElementById("classe");
    var imagemClasse = document.getElementById("imagemclasse")

    if (DClasse.value == "iniciador") {
        imagemClasse.src = "./images/iniciador.png"
        imagem.alt = "Logo Iniciador"
    } else if (DClasse.value == "controlador") {
        imagemClasse.src = "./images/controlador.png"
        imagem.alt = "Logo controlador"
    } else if (DClasse.value == "sentinela") {
        imagemClasse.src = "./images/sentinela.png"
        imagem.alt = "Logo sentinela"
    } else if (DClasse.value == "duelista") {
        imagemClasse.src = "./images/duelista.png"
        imagem.alt = "Logo duelista"
    }
}

function atualizarDrop() {

    var seletor = document.getElementById("classe");
    var valor = seletor.value;

    if (valor == "") {
        document.getElementById("iniciador").style.display = "none";
        document.getElementById("controlador").style.display = "none";
        document.getElementById("sentinela").style.display = "none";
        document.getElementById("duelista").style.display = "none";
    } else if (valor == "iniciador") {
        document.getElementById("iniciador").style.display = "block";
        document.getElementById("controlador").style.display = "none";
        document.getElementById("sentinela").style.display = "none";
        document.getElementById("duelista").style.display = "none";
    } else if (valor == "controlador") {
        document.getElementById("iniciador").style.display = "none";
        document.getElementById("controlador").style.display = "block";
        document.getElementById("sentinela").style.display = "none";
        document.getElementById("duelista").style.display = "none";
    } else if (valor == "sentinela") {
        document.getElementById("iniciador").style.display = "none";
        document.getElementById("controlador").style.display = "none";
        document.getElementById("sentinela").style.display = "block";
        document.getElementById("duelista").style.display = "none";
    } else if (valor == "duelista") {
        document.getElementById("iniciador").style.display = "none";
        document.getElementById("controlador").style.display = "none";
        document.getElementById("sentinela").style.display = "none";
        document.getElementById("duelista").style.display = "block";
    } else {
        document.getElementById("iniciador").style.display = "block";
        document.getElementById("controlador").style.display = "none";
        document.getElementById("sentinela").style.display = "none";
        document.getElementById("duelista").style.display = "none";
    }
}

function atualizarRank() {
    var RClasse = document.getElementById("rank");
    var imagemRank = document.getElementById("imagemrank")

    if (RClasse.value == "ferro") {
        imagemRank.src = "./images/ferro.png"
        imagem.alt = "Logo ferro"
    } else if (RClasse.value == "bronze") {
        imagemRank.src = "./images/bronze.png"
        imagem.alt = "Logo bronze"
    } else if (RClasse.value == "prata") {
        imagemRank.src = "./images/prata.png"
        imagem.alt = "Logo prata"
    } else if (RClasse.value == "ouro") {
        imagemRank.src = "./images/ouro.png"
        imagem.alt = "Logo ouro"
    } else if (RClasse.value == "platina") {
        imagemRank.src = "./images/platina.png"
        imagem.alt = "Logo platina"
    } else if (RClasse.value == "diamante") {
        imagemRank.src = "./images/diamante.png"
        imagem.alt = "Logo diamante"
    } else if (RClasse.value == "ascendente") {
        imagemRank.src = "./images/ascendente.png"
        imagem.alt = "Logo ascendente"
    } else if (RClasse.value == "imortal") {
        imagemRank.src = "./images/imortal.png"
        imagem.alt = "Logo imortal"
    } else if (RClasse.value == "radiante") {
        imagemRank.src = "./images/radiante.png"
        imagem.alt = "Logo radiante"
    }
}

function atualizarDias() {
    var HClasse = document.getElementById("dias");
    var imagemClasse = document.getElementById("imagemdia")

    if (HClasse.value == "segunda") {
        imagemClasse.src = "./images/seg.png"
        imagem.alt = "segunda"
    } else if (HClasse.value == "terca") {
        imagemClasse.src = "./images/ter.png"
        imagem.alt = "terça"
    } else if (HClasse.value == "quarta") {
        imagemClasse.src = "./images/qua.png"
        imagem.alt = "Quarta"
    } else if (HClasse.value == "quinta") {
        imagemClasse.src = "./images/qui.png"
        imagem.alt = "quinta"
    } else if (HClasse.value == "sexta") {
        imagemClasse.src = "./images/sex.png"
        imagem.alt = "sexta"
    } else if (HClasse.value == "sabado") {
        imagemClasse.src = "./images/sab.png"
        imagem.alt = "sábado"
    }
}

function atualizarLingua() {
    var LClasse = document.getElementById("lingua");
    var imagemlingua = document.getElementById("imagemlingua")

    if (LClasse.value == "portugues") {
        imagemlingua.src = "./images/banbra.png"
        imagem.alt = "bandsseira Brasil"
    } else if (LClasse.value == "ingles") {
        imagemlingua.src = "./images/baneua.png"
        imagem.alt = "bandeira EUA"
    } else if (LClasse.value == "espanhol") {
        imagemlingua.src = "./images/banesp.png"
        imagem.alt = "bandeira espanhola"
    } else if (LClasse.value == "russo") {
        imagemlingua.src = "./images/banusr.png"
        imagem.alt = "bandeira USSR"
    } else if (LClasse.value == "alemao") {
        imagemlingua.src = "./images/banger.png"
        imagem.alt = "bandeira alema"
    }
}
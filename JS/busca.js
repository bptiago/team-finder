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
    }
}

function atualizarDias() {
    var HClasse = document.getElementById("dias");
    var imagemClasse = document.getElementById("imagemdia")

    if (HClasse.value == "") {
        imagemClasse.src = "./images/valorant-logo.png"
        imagem.alt = "Logo Valorant"
    } else if (HClasse.value == "segunda") {
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

function atualizarclasse() {
    var DClasse = document.getElementById("classe");
    var imagemClasse = document.getElementById("imagemclasse")
    var ini = document.getElementById("iniciador");
    var con = document.getElementById("controlador");
    var sen = document.getElementById("sentinela");
    var due = document.getElementById("duelista");


    if (DClasse.value == "") {
        imagemClasse.src = "./images/valorant-logo.png"
        imagem.alt = "Logo Iniciador"
    } else if (DClasse.value == "iniciador" && ini.value == "") {
        imagemClasse.src = "./images/iniciador.png"
        imagem.alt = "Logo Iniciador"
    } else if (DClasse.value == "iniciador" && ini.value == "sova") {
        imagemClasse.src = "./images/sova-icon.png"
        imagem.alt = "Sova incon"
    } else if (DClasse.value == "iniciador" && ini.value == "breach") {
        imagemClasse.src = "./images/breach-icon.png"
        imagem.alt = "Breach icon"
    } else if (DClasse.value == "iniciador" && ini.value == "skye") {
        imagemClasse.src = "./images/skye-icon.png"
        imagem.alt = "Skye icon"
    } else if (DClasse.value == "iniciador" && ini.value == "kayo") {
        imagemClasse.src = "./images/kayo-icon.png"
        imagem.alt = "Kay/o icon"
    } else if (DClasse.value == "iniciador" && ini.value == "fade") {
        imagemClasse.src = "./images/fade-icon.png"
        imagem.alt = "Fade icon"
    } else if (DClasse.value == "iniciador" && ini.value == "gekko") {
        imagemClasse.src = "./images/gekko-icon.png"
        imagem.alt = "Gekko icon"
    } else if (DClasse.value == "controlador" && con.value == "") {
        imagemClasse.src = "./images/controlador.png"
        imagem.alt = "Logo controlador"
    } else if (DClasse.value == "controlador" && con.value == "brimstone") {
        imagemClasse.src = "./images/brimstone-icon.png"
        imagem.alt = "Brimstone icon"
    } else if (DClasse.value == "controlador" && con.value == "viper") {
        imagemClasse.src = "./images/viper-icon.png"
        imagem.alt = "Viper icon"
    } else if (DClasse.value == "controlador" && con.value == "omen") {
        imagemClasse.src = "./images/omen-icon.png"
        imagem.alt = "Omen icon"
    } else if (DClasse.value == "controlador" && con.value == "astra") {
        imagemClasse.src = "./images/astra-icon.png"
        imagem.alt = "Astra icon"
    } else if (DClasse.value == "controlador" && con.value == "harbor") {
        imagemClasse.src = "./images/harbor-icon.png"
        imagem.alt = "Harbor icon"
    } else if (DClasse.value == "sentinela" && sen.value == "") {
        imagemClasse.src = "./images/sentinela.png"
        imagem.alt = "Logo sentinela"
    } else if (DClasse.value == "sentinela" && sen.value == "sage") {
        imagemClasse.src = "./images/sage-icon.png"
        imagem.alt = "Sage icon"
    } else if (DClasse.value == "sentinela" && sen.value == "cypher") {
        imagemClasse.src = "./images/cypher-icon.png"
        imagem.alt = "Cypher icon"
    } else if (DClasse.value == "sentinela" && sen.value == "killjoy") {
        imagemClasse.src = "./images/killjoy-icon2.png"
        imagem.alt = "Killjoy icon"
    } else if (DClasse.value == "sentinela" && sen.value == "chamber") {
        imagemClasse.src = "./images/chamber-icon.png"
        imagem.alt = "Chamber icon"
    } else if (DClasse.value == "duelista" && due.value == "") {
        imagemClasse.src = "./images/duelista.png"
        imagem.alt = "Logo duelista"
    } else if (DClasse.value == "duelista" && due.value == "reyna") {
        imagemClasse.src = "./images/reyna-icon.png"
        imagem.alt = "Reyna icon"
    } else if (DClasse.value == "duelista" && due.value == "jett") {
        imagemClasse.src = "./images/jett-icon.png"
        imagem.alt = "Jett icon"
    } else if (DClasse.value == "duelista" && due.value == "raze") {
        imagemClasse.src = "./images/raze-icon.png"
        imagem.alt = "Raze icon"
    } else if (DClasse.value == "duelista" && due.value == "yoru") {
        imagemClasse.src = "./images/yoru-icon.png"
        imagem.alt = "Yoru icon"
    } else if (DClasse.value == "duelista" && due.value == "neon") {
        imagemClasse.src = "./images/neon-icon.png"
        imagem.alt = "Neonicon"
    }
}

function atualizarRank() {
    var RClasse = document.getElementById("rank");
    var imagemRank = document.getElementById("imagemrank")

    if (RClasse.value == ""){
        imagemRank.src = "./images/valorant-logo.png"
        imagem.alt = "Logo vava"
    } else if (RClasse.value == "ferro") {
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

function atualizarLingua() {
    var LClasse = document.getElementById("lingua");
    var imagemlingua = document.getElementById("imagemlingua")

    if (LClasse.value == "") {
        imagemlingua.src = "./images/valorant-logo.png"
        imagem.alt = "Logo Valorant"
    } else if (LClasse.value == "portugues") {
        imagemlingua.src = "./images/banbra.png"
        imagem.alt = "bandeira Brasil"
    } else if (LClasse.value == "ingles") {
        imagemlingua.src = "./images/baneua.png"
        imagem.alt = "bandeira EUA"
    } else if (LClasse.value == "espanhol") {
        imagemlingua.src = "./images/banesp.png"
        imagem.alt = "bandeira espanhola"
    } else if (LClasse.value == "russo") {
        imagemlingua.src = "./images/banrus.png"
        imagem.alt = "bandeira Rússia"
    } else if (LClasse.value == "alemao") {
        imagemlingua.src = "./images/banger.png"
        imagem.alt = "bandeira alema"
    }
}
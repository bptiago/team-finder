function atuamain() {

}

function aturank() {

}

function atulingua() {

}

function atudia() {

}

function atumain() {

    var immain = document.getElementById("main");
    var imagemmain = document.getElementById("imgmain")

    if (immain.value == "") {
        imagemmain.src = "./images/valorant-logo.png"
        imagem.alt = "Logo Valorant"
    } else if (immain.value == "sova") {
        imagemmain.src = "./images/sova-icon.png"
        imagem.alt = "Sova"
    } else if (immain.value == "breach") {
        imagemmain.src = "./images/breach-icon.png"
        imagem.alt = "Breach"
    } else if (immain.value == "skye") {
        imagemmain.src = "./images/skye-icon.png"
        imagem.alt = ""
    } else if (immain.value == "kayo") {
        imagemmain.src = "./images/kayo-icon.png"
        imagem.alt = ""
    }
}
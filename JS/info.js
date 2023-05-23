function atuamain(){

}

function aturank(){

}

function atulingua(){

}

function atudia(){

}

function atumain() {
    var immain = document.getElementById("main");
    var imagemmain = document.getElementById("imgmain")

    if (immain.value == "") {
        imagemmain.src = "./images/valorant-logo.png"
        imagem.alt = "Logo Valorant"
    } else if (immain.value == "breach") {
        imagemmain.src = "./images/breach-icon.png"
        imagem.alt = "Logo Valorant"
    }
}
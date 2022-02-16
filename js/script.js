let playerstart;
let tour = 0
let i = 1
isgreen = false

function creategrid () {
    console.log("hehe")
    time = setTimeout("creategrid()",60)
    numero = document.createElement("div");
    numero.className = "case";
    numero.setAttribute("id", i);
    document.getElementById("grille").appendChild(numero);
    if (i % 3 == 0) {
        br = document.createElement("br");
        document.getElementById("grille").appendChild(br);
    }
    i++;
    if (i > 9) {
        clearTimeout(time);
        starter();
    }
}

function starter() {
	let tour1 = Math.floor(Math.random() * 2 + 1);
	playerstart = 'p'+tour1;
	start();
}

function start () {
    
}

numero.onclick = function () {
    if (tour == 0 || 2 || 4 || 6 || 8){
        tour++
        let id = this.id
        document.getElementById(id).style.backgroundColor = "blue";
    }
    else{
        tour++
        
    }
}


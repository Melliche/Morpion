let nbcaseclick = 0
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
    }
}

numero.onclick = function () {
    if (nbcaseclick == 0 || 2 || 4 || 6 || 8){
        nbcaseclick++
        let id = this.id
        document.getElementById(id).style.backgroundColor = "blue";
    }
    else{
        nbcaseclick++
        
    }
}


let playerstart;
let tour = 0
// let i = 1
isgreen = false
let idclick;

for (let i = 1; i < 10; i++){
    console.log(i)
    numero = document.createElement("div");
    numero.className = "case";
    numero.setAttribute("id", i);
    document.getElementById("grille").appendChild(numero);
    if (i % 3 == 0) {
        br = document.createElement("br");
        document.getElementById("grille").appendChild(br);
    }
    if (i > 9) {
        clearTimeout(time);
        starter();
    }
} 


let onClick = function click() {
    console.log(this.id);
    idclick = this.id;
    startplayer();
    return idclick
}

for (let i = 1; i < 10; i++){
    document.getElementById(i).onclick = onClick;
}




function starter() {
	let tour1 = Math.floor(Math.random() * 2 + 1);
	playerstart = tour1;
	start();
}

function start () {
    if (playerstart == 1){
        startplayer();
    }else{
        startbot();
    }
}

function pair (nbr){
    if (nbr%2 == 0){

    }
}

function startplayer () {
    console.log("ZE")
    document.getElementById(idclick).style.backgroundColor = "blue";
    
  
}

function startbot () {
    if (playerstart != 1){
        tour++;
        idrdm = Math.floor(Math.random() * 9 + 1)
        document.getElementById(idrdm).style.backgroundColor = "red";
        startplayer();
        
    }

    startplayer();
}







// document.onclick = function click () {
//     if (tour == 0 || 2 || 4 || 6 || 8){
//         tour++;
//         let id = this.id;
//         console.log(id)
//         document.getElementById(id).style.backgroundColor = "blue";
//     }
//     else
//         tour++;
          
// }

// function creategrid () {
//     document.getElementById("button-start").style.visibility = "hidden";
//     console.log("hehe");
//     time = setTimeout("creategrid()",60);
//     numero = document.createElement("div");
//     numero.className = "case";
//     numero.setAttribute("id", i);
//     document.getElementById("grille").appendChild(numero);
//     if (i % 3 == 0) {
//         br = document.createElement("br");
//         document.getElementById("grille").appendChild(br);
//     }
//     i++;
//     if (i > 9) {
//         clearTimeout(time);
//         starter();
//     }     
// }
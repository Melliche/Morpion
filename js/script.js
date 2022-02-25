let playerstart;
let tour = 0
let idclick;
let listcase = [];
let idrdm;
let botstart = false;
let botturn = false;
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
    if (i >= 9) {
        starter();
    }
} 



let onClick = function click() {
    console.log(this.id);
    idclick = this.id;
    console.log(listcase.indexOf(idclick))
    if (listcase.indexOf(parseInt(idclick)) == -1){
        startplayer();
    }
}

for (let i = 1; i < 10; i++){
    document.getElementById(i).onclick = onClick;
}

function starter() {
	let tour1 = Math.floor(Math.random() * 2 + 1);
	playerstart = tour1;
    console.log(playerstart)
	start();
}

function start () {
    if (playerstart == 1){
    }else{
        botstart = true;
        startbot();
    }
}
function pair (nbr){
    if (nbr%2 == 0){
    }
}

function startplayer () {
    tour++;
    console.log("eben")
    listcase.push(parseInt(idclick));
    document.getElementById(idclick).style.backgroundColor = "blue";
    botturn = true;
    console.log(botturn)
    if (listcase.length <= 8)
    startbot();

}

function startbot () {
    if (playerstart != 1 && tour < 2){
        tour++;
        let idrdm = Math.floor(Math.random() * 9 + 1)
        listcase.push(parseInt(idrdm));   
        document.getElementById(idrdm).style.backgroundColor = "red"; 
        console.log("START")
        console.log(idrdm) 
    }
    if (botstart == false || botturn == true ){
        console.log(botturn)
        console.log(listcase)
        idrdmgood = false
         while (idrdmgood == false){
            idrdm = Math.floor(Math.random() * 9 + 1)
            if (listcase.indexOf(parseInt(idrdm)) == -1){
                idrdmgood = true
                console.log(botturn)       
                console.log(idrdm) 
            } 
        }
        listcase.push(parseInt(idrdm));  
        document.getElementById(idrdm).style.backgroundColor = "red"; 
        botturn = false;
    }
}

// while (eben = true){
//     if
//     console.log(botturn)
//     idrdm = Math.floor(Math.random() * 9 + 1)
//     console.log(idrdm) 
// }
// listcase.push(parseInt(idrdm));  
// document.getElementById(idrdm).style.backgroundColor = "red"; 
// botturn = false;
// }

// listcase.includes(idrdm) = true
// idrdm == listcase.indexOf(1,2,3,4,5,6,7,8,9)
// while (idrdm == listcase[1] || idrdm == listcase[2] || idrdm == listcase[3] || idrdm == listcase[4] || idrdm == listcase[5] || idrdm == listcase[6] || idrdm == listcase[7] || idrdm == listcase[8] || idrdm == listcase[9] || idrdm == listcase[0]){



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
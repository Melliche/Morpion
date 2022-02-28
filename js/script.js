let playerstart;
let tour = 0
let idclick;
let listcase = [];
let botstart = false;
let botturn = false;
let winner;
let playercase = [];
let botcase = [];
let win = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];



// génération de la grille
for (let i = 1; i < 10; i++){
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

// définie qui commence la partie
function starter() {
	playerstart = Math.floor(Math.random() * 2 + 1);
	start();
}

function start () {
    if (playerstart != 1){
        botstart = true;
        startbot();
    }
}

//récupération d'id de la case cliqué dans une variable
let onClick = function click() {
    idclick = this.id;
    if (listcase.indexOf(parseInt(idclick)) == -1 && winner == undefined){
        startplayer();
    }
}
for (let i = 1; i < 10; i++){
    document.getElementById(i).onclick = onClick;
}

// function du joueur
function startplayer () {
    tour++;
    listcase.push(parseInt(idclick));
    playercase.push(parseInt(idclick));
    document.getElementById(idclick).style.backgroundColor = "blue";
    botturn = true;
    victory();
    if (listcase.length <= 8 && winner == undefined){
        startbot();
    }
}

// fonction de jeu du bot
function startbot () {
    let idselect;
    // Si le bot commence, choix de case random
    if (playerstart != 1 && tour < 2){
        tour++;
        idselect = Math.floor(Math.random() * 9 + 1)
        listcase.push(parseInt(idselect)); 
        botcase.push(parseInt(idselect));  
        document.getElementById(idselect).style.backgroundColor = "red"; 
    }

    // Si le bot ne commence pas et que c'est son tour, choix de case random
    let lastid = 0;
    lastid = idselect;
    if (botstart == false || botturn == true ){
        let idrdmgood = false;
        while (idrdmgood == false){
            idselect = Math.floor(Math.random() * 9 + 1)
            if (listcase.indexOf(parseInt(idselect)) == -1  ){
                idrdmgood = true     
            } 
        }
        
        // Si le bot est à une case de la condition de victoire, il selectionne la bonne case
        let ratchoice = true;
        let listchoice = true;
        for (let i = 0; i < 8; i++) {
            let goodcasebot = win[i].filter(good => good == botcase[0]  || good == botcase[1] || good == botcase[2] || good == botcase[3] || good == botcase[4] || good == botcase[5] || good == botcase[6] || good == botcase[7] || good == botcase[8]);
            if ( goodcasebot.length == 2){ // si 2 element bot sont une condition de victoire
                let thinkfound = win[i].filter(victorycase => victorycase != goodcasebot[0] && victorycase != goodcasebot[1]);
                if (listcase.indexOf(parseInt(thinkfound)) == -1) {
                    idselect = thinkfound;
                    ratchoice = false;
                    listchoice = false;
                    break
                }
            }
        }

        // Si le joueur est a une case de la condition de victoire, il selectionne la case de victoire du joueur
        if (ratchoice == true ) {
            for (let i = 0; i < 8; i++) {
                let goodcaseplayer = win[i].filter(bad => bad == playercase[0]  || bad == playercase[1] || bad == playercase[2] || bad == playercase[3] || bad == playercase[4] || bad == playercase[5] || bad == playercase[6] || bad == playercase[7] || bad == playercase[8]);
                if ( goodcaseplayer.length == 2){ // si 2 element joueur sont une condition de victoire
                    let thinkfound = win[i].filter(victoryplayer => victoryplayer != goodcaseplayer[0] && victoryplayer != goodcaseplayer[1]);
                    if (listcase.indexOf(parseInt(thinkfound)) == -1) {
                        idselect = thinkfound;
                        listchoice = false;
                        break
                    }
                } 
            }    
        }
         
        // Si les deux conditions du dessus sont fausses, le bot choisira une case qui complète une série en cours ou il n'y a pas de case du joueur
        if (listchoice == true) {
            for (let i = 0; i < 8; i++) {
                if (win[i].includes(playercase) == false && win[i].includes(lastid) == true && playercase.indexOf(parseInt(win[i])) == -1  && playercase.indexOf(parseInt(lastid)) == -1 ) { 
                    let notbotcase = win[i].filter(victory => victory != lastid && victory != botcase ) ; 
                    let foundcase = notbotcase.find(element => element > 0 && element != botcase[i]);        
                    if (listcase.indexOf(parseInt(foundcase)) == -1){ // Si la case trouvé n'est pas dans la liste des cases déjà utilisé
                        idselect = foundcase; 
                        break
                    }
                }
            }
        }
        botcase.push(parseInt(idselect));
        listcase.push(parseInt(idselect));  
        document.getElementById(idselect).style.backgroundColor = "red"; 
        botturn = false;
        lastid = idselect;
        victory();
    }
}

//condition de victoire
function victory (){
    for (let i = 0; i< 8; i++) {
        if (win[i].every(caseplayer => playercase.includes(caseplayer)) == true){
            winner = "player";
            document.getElementById("score").innerHTML = "Le Joueur a Gagné !";
        }else if (win[i].every(casebot => botcase.includes(casebot)) == true){
            winner = "bot";
            document.getElementById("score").innerHTML = "Le Bot a Gagné !";
        }
    }
}
















// let taupe = [1, 2 ,3 , 4 ];
// let taupeverif = [1, 2 , 5 , 4];
// let heri = taupe.filter(rut => rut == taupeverif[0]  || rut == taupeverif[2] || rut == taupeverif[1] || rut == taupeverif[3]);

// function test () {
//     console.log(heri + "veriftaupe")
// }

// for (let i = 0; i < 8; i++) {

//     let rut = win[i].filter(rum => rum == botcase[0]  || rum == botcase[1] || rum == botcase[2] || rum == botcase[3] || rum == botcase[4] || rum == botcase[5] || rum == botcase[6] || rum == botcase[7] || rum == botcase[8]);
//     console.log(rut + "rut")
//     console.log(botcase + "botcase")
//     if ( rut.length == 2){ // si 2 element bot sont une condition de victoire
//         console.log("VERIFRUT")
//         let thinkfound = win[i].filter(victo => victo != rut[0] && victo != rut[1]);
//         if (listcase.indexOf(parseInt(thinkfound)) == -1) {
//             idrdm = thinkfound;
//             console.log(idrdm + "FOUNDRUT")
//             break
//         }
//         console.log(rat + "RATTTT")
//     }


//     console.log(rat+" !!!!!!!!!!!!!!!!!!" + win[i])
//     rat = win[i].filter(rot => rot == playercase[0]  || rot == playercase[1] || rot == playercase[2] || rot == playercase[3] || rot == playercase[4] || rot == playercase[5] || rot == playercase[6] || rot == playercase[7] || rot == playercase[8]);
//     if ( rat.length == 2){ // si 2 element joueur sont une condition de victoire
//         console.log("VERIFRAT")
//         let thinkfound = win[i].filter(victor => victor != rat[0] && victor != rat[1]);
//         if (listcase.indexOf(parseInt(thinkfound)) == -1) {
//             idrdm = thinkfound;
//             console.log(idrdm + "FOUNDRAT")
//             break
//         }
//         console.log(rat + "RATTTT")
//     }

//     if (win[i].includes(playercase) == false && win[i].includes(lastid) == true && playercase.indexOf(parseInt(win[i])) == -1  && playercase.indexOf(parseInt(lastid)) == -1 ) { 
        
        
        
//         console.log(rat+" rat" + win[i])
//         console.log("VERIFF") 
//         result = win[i].filter(victory => victory != lastid && victory != botcase ) ; 
//         found = result.find(element => element > 0 && element != botcase[i]);
//         // si 2 element rouge dans un win => 3eme = good        
//         // let rat = win[i].filter(rot => rot == getOccurrence(botcase, win[i][0], win[i][1], win[i][2] ));          

//         if (listcase.indexOf(parseInt(found)) == -1){
//             // rat = win[i].filter(rot => rot == botcase[0]  || rot == botcase[1] || rot == botcase[2] || rot == botcase[3] || rot == botcase[4] || rot == botcase[5] || rot == botcase[6] || rot == botcase[7]);
//             // if () {
//             // }
//             idrdm = found; 
//             console.log (found + "FOUND" + win[i])
//             break
//             // found != listcase[i] 
//         }
//     }
//     console.log(win[i] + "###########")
    
    
//     // idrdm = found; 
// }

// botcase.push(parseInt(idrdm));
// listcase.push(parseInt(idrdm));  
// // botcase.push(parseInt(idrdm));
// document.getElementById(idrdm).style.backgroundColor = "red"; 
// victory();
// botturn = false;
// lastid = idrdm;
// }
// }

// for (let i = 0; i < 2; i++) {
//     if (getOccurrence(playercase, 1 + i ) == 1 && getOccurrence(playercase, 2 + i) == 1) {
//         if (i == 0){
//             idrdm = 3;
//         }else if (i == 1){
//             idrdm = 1; 
//         }else if (getOccurrence(playercase, 1 ) == 1 && getOccurrence(playercase, 3) == 1){
//             idrdm = 2;
//         }
//     }
// }


// if (bluecase.indexOf(parseInt(1)) == 1){
//     console.log("WINNNER BLUE")
// }

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
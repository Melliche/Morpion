let playerstart;
let tour = 0
let idclick;
let listcase = [];
let idrdm;
let botstart = false;
let botturn = false;

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
let lastid = 0;
let winner;
let result;
let found;
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



let onClick = function click() {
    idclick = this.id;
    if (listcase.indexOf(parseInt(idclick)) == -1 && winner == undefined){
        startplayer();
    }
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
    listcase.push(parseInt(idclick));
    playercase.push(parseInt(idclick));
    document.getElementById(idclick).style.backgroundColor = "blue";
    botturn = true;
    victory();
    if (listcase.length <= 8 && winner == undefined){
        
        startbot();
    }
}


function startbot () {
    if (playerstart != 1 && tour < 2){
        tour++;
        idrdm = Math.floor(Math.random() * 9 + 1)
        listcase.push(parseInt(idrdm)); 
        botcase.push(parseInt(idrdm));  
        document.getElementById(idrdm).style.backgroundColor = "red"; 
        result = win[0].filter(function(victory){
            return victory != botcase;
        });
        console.log(result)
        // console.log(idrdm)
    }
    lastid = idrdm;
    // console.log(win[0].includes(lastid))
    if (botstart == false || botturn == true ){
        let idrdmgood = false;
        while (idrdmgood == false){
            idrdm = Math.floor(Math.random() * 9 + 1)
            if (listcase.indexOf(parseInt(idrdm)) == -1  ){
                idrdmgood = true     
            } 
        }
        
        for (let i = 0; i < 8; i++) {
            if (win[i].includes(playercase) == false && win[i].includes(lastid) == true && playercase.indexOf(parseInt(win[i])) == -1  && playercase.indexOf(parseInt(lastid)) == -1 ) { 
        
                console.log("VERIFF") 
                result = win[i].filter(victory => victory != lastid && victory != botcase ) ; 
                found = result.find(element => element > 0 && element != botcase[i]);
                // si 2 element rouge dans un win => 3eme = good

                
                // let rat = win[i].filter(rot => rot == getOccurrence(botcase, win[i][0], win[i][1], win[i][2] ));
                let rat = win[i].filter(rot => rot == botcase[0]  || rot == botcase[1] || rot == botcase[2] || rot == botcase[3] || rot == botcase[4] || rot == botcase[5] || rot == botcase[6] || rot == botcase[7]);
                console.log(rat+"rat")
                if ( rat.length == 2){
                    let thinkfound = win[i].filter(victor => victor != rat[0] && victor != rat[1]);
                    if (listcase.indexOf(parseInt(thinkfound)) == -1) {
                        found =thinkfound;
                    }
                    console.log(rat + "RATTTT")
                }

                if (listcase.indexOf(parseInt(found)) == -1){
                    rat = win[i].filter(rot => rot == botcase[0]  || rot == botcase[1] || rot == botcase[2] || rot == botcase[3] || rot == botcase[4] || rot == botcase[5] || rot == botcase[6] || rot == botcase[7]);
                    // if () {

                    // }
                    idrdm = found; 

                    break
                    // found != listcase[i] 
                }
            }
        }
        
        botcase.push(parseInt(idrdm));
        listcase.push(parseInt(idrdm));  
        // botcase.push(parseInt(idrdm));
        document.getElementById(idrdm).style.backgroundColor = "red"; 
        victory();
        botturn = false;
        lastid = idrdm;
    }
}

// && win[0].filter(victori => victori != botcase

function getOccurrence(array, value, value1, value2) {
    return array.filter((v) => (v === value) && (v === value1) && (v === value2)).length;
}


function victory (){
    for (let i = 0; i< 8; i++) {
        
        if (win[i].every(ai => playercase.includes(ai)) == true){
            console.log("WINNNER PLAYER");
            winner = "player";
            document.getElementById("score").innerHTML = "Le Joueur a Gagné !";
        }else if (win[i].every(ai => botcase.includes(ai)) == true){
            console.log("WINNNER BOT");
            winner = "bot";
            document.getElementById("score").innerHTML = "Le Bot a Gagné !";
        }
    }

}


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
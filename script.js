let answer1 ;
let answer2 ;
let answer3 ;
let answer4 ;
let step1 = false;
let step2 = false;
let step3 = false;
let step4 = false;


while (step1 !== true) {
    answer1 = prompt("Voulez vous du café ou du thé");
    if ((answer1.toLowerCase() === "café") || (answer1.toLowerCase() === "thé")) {
        step1 = true;
        } else {
        step1 = false;
        }
} 

while (step2 !== true) {
    answer2 = prompt("Voulez vous du sucre? Oui, non");
    if ((answer2.toLowerCase() === "oui") || (answer2.toLowerCase() === "non")) {
        step2 = true;
        
        if (answer2.toLowerCase() === "oui") {
        answer2 = "avec du sucre";
        } else {
        answer2 = "sans sucre";
        }
        
        } 
}

while (step3 !== true) {
    answer3 = prompt("Avec du lait? Oui, non?");
    if ((answer3.toLowerCase() === "oui") || (answer3.toLowerCase() === "non")) {
        step3 = true;

            if(answer3.toLowerCase() === "oui") {
                while (step4 !== true) {
                answer4 = prompt("Végétal? Oui ou non.");
                    if ((answer4.toLowerCase() === "oui") || (answer4.toLowerCase() === "non")) {
                    step4 = true;
                    
                        if (answer4.toLowerCase() === "oui") {
                        answer3 = "lait végétal";   
                        } else {
                        answer3 = "lait animal";  
                        }
                    }
                }
            } else {
            answer3 = "sans lait"
            }
    }
}

console.log(`Récapitulatif de la commande: ${answer1}, ${answer2}, ${answer3}.`);













const farger = ["spader", "hjärter", "ruter", "klöver"];

let nuvFarg = [];
let nuvNummer = 8;

let hand = [];

// Vi drar 20 kort
for(let i=0; i<20; i++) {

    // Dra ett kort
    nuvFarg[0] = farger[Math.floor(Math.random()*4)];
    nuvNummer = (Math.floor(Math.random()*13) + 1);

    console.log(nuvFarg[0] + " " + nuvNummer);

    /* if(i < 1) {
        hand.push(nuvFarg[0]);
        hand.push(nuvNummer);
    } else {
        // Kolla om vi har dragit kortet förut
        for(let j=0; j<hand.length; j++) {
            if((hand[j] === nuvFarg[0]) && (hand[j+1] === nuvNummer)) {
                console.log("Samma kort som vi hade förut, så vi drar ett kort till!");
                console.log(j);
            } else {
                hand.push(nuvFarg[0]);
                hand.push(nuvNummer);
                console.log("Yipeee!!!");
            }
        }
    } */


/*     if(i % 5 != 0) {
        // Fyll på handen med kort
        for(let j=0; j<5; j++) {

            // Vi måste ha dragit minst två kort och vi måste ha två nya värden
            if (i > 0 && (j-1) % 2 === 0) {

                // Kontrollera att vi inte redan har dragit det kortet
               // if((hand[j] != hand[j-2]) && (hand[j+1] != hand[j-1])) {
               //if((hand[j] != hand[j-2])) {
                    hand.push(nuvFarg[0]);
                    hand.push(nuvNummer);
                    console.log("999999");

               // }
                
            }           

        } 
        
    } else {
        // Nu har vi en full hand
        console.log(hand);
        hand = [];
    } */
}

console.log(hand);

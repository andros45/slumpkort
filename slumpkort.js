const farger = ["spader", "hjärter", "ruter", "klöver"];

let nuvFarg = ["ruter"];
let nuvNummer = 8;

let hand = [];

for(let i=0; i<20; i++) {
    nuvFarg[0] = farger[Math.floor(Math.random()*4)];
    nuvNummer = (Math.floor(Math.random()*13) + 1);
    console.log(nuvFarg + " " + nuvNummer);
    if(i % 5 != 0) {

        // Fyll på handen med kort
        for(let j=0; j<hand.length; j++) {

            // Vi måste ha dragit minst två kort och vi måste ha två nya värden
            if (i > 1 && j % 2 === 0) {
                // Kontrollera att vi inte redan har dragit det kortet
                if((hand[j] != hand[j-2]) && (hand[j+1] != hand[j-1])) {
                    hand.push(nuvFarg[0]);
                    hand.push(nuvNummer);
                }
                
            }            console.log("81818");

        }
        
    } else {
        // Nu har vi en full hand
        console.log(hand);
        hand = [];
    }
}

let ball = document.getElementById("boxb");
let teamabat = document.getElementById("teamabat");
let teamabal = document.getElementById("teamabal");
let teambbat = document.getElementById("teambbat");
let teambbal = document.getElementById("teambbal");
let result = document.getElementById("result");
let ingbox = document.getElementById("boxo");
var totalbl = 0, totalrun = 0, totalw = 0, teamarun = 0, teambrun = 0, tasco, tbsco, oq,bq ynam,  fing = true, alertok = true, sing = false,  gameovr = false;

ynam = prompt("Hi!!👋 I'm TAMAL. \n Good to see you !!\n What is your name BUDDY ??")
oq = prompt ("Hey "+ ynam + " !! Let's play \n Enter overs quantity 👇👇");
bq = (parseFloat(oq))*6;
alert("HIT the BALL to PLAY !!");

ball.onclick = function (){
    // console.log(oq);
    totalbl += 1;
    var val = rn ();
   
    if (val === 7){
        result.innerText = "Last ball :- WICKET" ;
    }
    else if (val === 5){
        result.innerText = "Last ball :- WIDE" ;
    }
    else {
        result.innerText = "Last ball :- " + (val>1 ? val + " Runs" :val + " Run" );
    }
    
    
    if (val === 7 && val !== 5) {
        totalw += 1;
    }
    else if (val === 5) {
        totalbl -= 1;
        totalrun += 1;
    }
    else {
        totalrun += val;        
    }
        
    if(fing){
            teamabat.innerHTML = ("Team A :- " + totalrun + " / " + totalw);
            teambbal.innerHTML = ("Team B :- " + Math.floor(totalbl/6) + " . " + totalbl%6);
            tasco = teamabat.innerHTML + "( " + Math.floor(totalbl/6) + " . " + totalbl%6 + " )";
    
            if (totalw === 10 || totalbl == bq ){
                teamarun = totalrun;
                alert("1st inning is over !! \n " + teamabat.innerText + "( " +  Math.floor(totalbl/6) + " . " + totalbl%6 +  ")\n Start 2nd innings.");
                fing = false;
                sing = true;
                totalrun = 0;
                totalbl = 0;
                totalw = 0;
            }
    }
    else if (sing){
            teambbat.innerHTML = ("Team B :- " + totalrun + " / " + totalw);
            teamabal.innerHTML = ("Team A :- " + Math.floor(totalbl/6) + " . " + totalbl%6);
            tbsco = teambbat.innerHTML + "( " + Math.floor(totalbl/6) + " . " + totalbl%6 + " )";
            teambrun = totalrun;

            gameovr = (teambrun > teamarun) ? true : false;
            sing = (teambrun > teamarun) ? false : true;
    
            if (totalw === 10 || totalbl == bq){
                gameovr = true;
                sing = false;
                alert("2nd innings is over !! \n" + teambbat.innerText +  "( " +  Math.floor(totalbl/6) + " . " + totalbl%6 +  ")" );
    
            }
    }
    
    if (gameovr) {
        if (teambrun > teamarun) {
            alert("TEAM B WON THE MATCH !! \n 🅱️🅱️🅱️🅱️🅱️🅱️\n" + tasco + "\n" + tbsco );
            alert("Refresh the page to play again !! \n Thank you !!" + ynam );
            location.reload();
        }

        else if (teamarun > teambrun) {
            alert("TEAM A WON THE MATCH !! \n 🅰️🅰️🅰️🅰️🅰️🅰️\n" + tasco + "\n" + tbsco );
            alert("Refresh the page to play again !! \n Thank you !!" + ynam );
            location.reload();
        }
        else{
            alert("OMG !! IT'S DRAW !! \n 😮😮😮😮😮😮\n" + tasco + "\n" + tbsco );
            alert("Refresh the page to play again !! \n Thank you !!" + ynam );
            location.reload();
        }
    }

// console.log ("val :- " + val);
// console.log ("totalrun :- " + totalrun);
// console.log ("totalbl  :- " + totalbl);
// console.log ("totalw :- " + totalw);
}


function rn () {
    var rn = Math.floor(Math.random() * 8);
    rn = rn<4 && rn>0 ? rn+1 : rn;
return rn;
}

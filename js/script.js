let canvas = document.getElementById("cvn");
let ctx = canvas.getContext('2d');

ctx.lineWidth=4;

ctx.beginPath();
ctx.moveTo(150,750);
ctx.lineTo(150,50);
ctx.lineTo(700,50);
ctx.lineTo(700,250);
//ctx.moveTo(700,250);
ctx.arc(700,300,50,0,Math.PI*2,true);
ctx.moveTo(700,350);
ctx.lineTo(700,450);
ctx.lineTo(730,500);
ctx.moveTo(700,450);
ctx.lineTo(670,500);
ctx.moveTo(650,400);
ctx.lineTo(750,400);
ctx.moveTo(50,750);
ctx.lineTo(250,750);
ctx.moveTo(150,650);
ctx.lineTo(100,750);
ctx.moveTo(150,650);
ctx.lineTo(200,750);
ctx.moveTo(250,50);
ctx.lineTo(150,150);

ctx.stroke();
ctx.closePath();

let btn= document.getElementById("btn");
let table = ["INSEPARABLE","JALOUX","MOYEN","MUET","NOIR","NOUVEAU","PETIT","POLI","PROPRE","ROUX","SAGE","SALE","SERIEUX","SOURD","TRANQUILLE","ARROSOIR","ASSIETTE","BALLE","BATEAU","BOITE","BOUCHON","BOUTEILLE","BULLES",
"CANARD"];
let letters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","V","W","X","Y","Z"];
let letter;
let mot;
let secret;



function word()
{
    let randomNumber = Math.floor(Math.random() * (table.length));
    /* document.getElementById("text").innerHTML = table[randomNumber];
    let mot= document.getElementById("text").innerHTML; */
    mot=table[randomNumber];
    secret="";

for (let i = 0 ; i < mot.length ; i++) 
{
    table[i]=mot.charAt(i);
    secret+= '_ ' ;
}
    document.getElementById("text").innerHTML= secret;
    console.log(mot);
}
function askLetter()
{
    letter= prompt("Donne moi une lettre");
    letter= letter.toUpperCase();
    let empty="";
    for(let i=0; i<=mot.length; i++)
    {
        if ( letter == mot.charAt(i) ) 
        {
            empty += letter;
        }
        else 
        {
            empty += secret.charAt(i) ;
        }
    }
    document.getElementById("text").innerHTML=empty;
    secret= empty;
}
btn.addEventListener("click",word);
button.addEventListener("click",askLetter);



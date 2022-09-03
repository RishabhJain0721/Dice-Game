let no1 = Math.random();
no1=Math.ceil(no1*6);
let no2 = Math.random();
no2=Math.ceil(no2*6);
console.log(no1);
console.log(no2);
function myLoad(){
    document.querySelector(`.img1`).setAttribute(`src`,`utils/dice${no1}.png`);
    document.querySelector(`.img2`).setAttribute(`src`,`utils/dice${no2}.png`);
}
window.onload=myLoad;
if(no1>no2){
    document.querySelector(`.title`).innerHTML=`Player 1 Wins!`;
}
else if(no1<no2){
    document.querySelector(`.title`).innerHTML=`Player 2 Wins!`;
}
else if(no1===no2){
    document.querySelector(`.title`).innerHTML=`Draw!`;
}

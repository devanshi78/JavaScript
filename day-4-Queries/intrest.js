let amount = 250000;
let intrestrate = 0.05; //5%
let year = 10;

if(amount >= 500000 && year >= 5){
    intrestrate = 0.07;
}else if(amount >= 300000 && year >= 3){
    intrestrate = 0.05;
}else if(amount >= 200000 && year >= 3){
    intrestrate = 0.042; //4.2%
}else{
    intrestrate = 0.025; // 2.5%
}

let yearlyintrestrate = amount * intrestrate * year;
let netamount = amount + yearlyintrestrate;

console.log(`Amount : ${amount}`);
console.log(`intrestrate : ${intrestrate}`);
console.log(`netamount : ${netamount}`);
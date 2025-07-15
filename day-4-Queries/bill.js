let p_name = "BOOK";
let p_price = 5000;
let p_qty = 3;
let total = p_price * p_qty;
let discountrate;

if(total >= 5000){
    discountrate = 0.15;
}else if(total >= 3000){
    discountrate = 0.10;
}else{
    discountrate = 0.05;
}

let discount = total * discountrate;
let nettotal = total - discount;

console.log("----- Product Details -----");
console.log(`Product:           ${p_name}`);
console.log(`Price:             ₹${p_price}`);
console.log(`Quantity:          ${p_qty}`);
console.log(`Total:             ₹${total}`);
console.log(`Discount (15%):    ₹${discount}`);
console.log(`Net Total:         ₹${nettotal}`);
if(nettotal >= 2000){
    console.log("-------FREE delivery-------");
}else{
    console.log("-------delivery charge ₹50-------");
}
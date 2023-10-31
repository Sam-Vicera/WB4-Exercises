

let lunch = [
    { item: "Steak Fajitas", price: 9.95 },
    { item: "Chips and Guacamole", price: 5.25 },
    { item: "Sweet Tea", price: 2.79 }
]

let myTotalBeforeTaxes = getOrderTotal(lunch);
let taxes = parseFloat((0.08 * myTotalBeforeTaxes).toFixed(2));
let tip = parseFloat((0.18 * myTotalBeforeTaxes).toFixed(2));
let myFinalTotal = (myTotalBeforeTaxes + taxes + tip).toFixed(2);


console.log(`Cost: $ ${myTotalBeforeTaxes}`);
console.log(`Tax: $ ${taxes}`);
console.log(`Tip : $ ${tip}`);
console.log(`My Total : $ ${myFinalTotal}`);




function getOrderTotal(orderItems) {
    // create total variable
    let orderTotal = 0;

    // loop through the array
    // add price to the total
    for(let i = 0; i < orderItems.length; i++) {
        orderTotal = orderTotal + orderItems[i].price
    }

    // return the total
    return orderTotal;
}
let myinfo = {
    fullName: "Samuel Hernandez Vicera",
    address: "1234 W Something St.",
    city: "Phoenix",
    state: "Arizona",
    zip: 12345,
}
function printContact(info){
console.log(`${myinfo.fullName}`);
console.log(myinfo.address);
console.log(`${myinfo.city}, ${myinfo.state} ${myinfo.zip}`);

}
printContact(myinfo);
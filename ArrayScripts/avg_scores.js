
let myScores = [92,98,84,76,89,99,100,];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(arrayScores){
    let sum = 0
for (i = 0; i < arrayScores.length; i++){
   
    sum += arrayScores[i]
    
}
let average = sum/(arrayScores.length)
return average
}
console.log(getAverage(myScores).toFixed(2));
console.log(getAverage(yourScores).toFixed(2));
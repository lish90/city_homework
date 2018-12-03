// Alisha

//Step 1: Declare the var names Ruth, John, Peter
// Write your code here
var names=['Ruth','John',"Peter"];

// Step 2: Declare the var ages 70, 21, 65
// Write your code here

var ages = [70,21,65];

// Step 3 Fillin the logic for our function

function calculateYoungerAndElder(names, ages) {


// Step 4: Initialise the two variables that will hold the older and younger variables
// Write your code here
        var older = ages[0];
        var younger = ages[0];
// Step 5: Initialise an empty array called output that will hold the older and younger values
// Write your code here
         var output= [];
// Step 6: Write a for loop that will iterate through ages array
// and check what is the highest and lowest value
            for (var i=0;i<ages.length;i++) {
                console.log (names[i]);
                console.log(ages[i]);
        
                if (ages[i]<= older) {
                   older = ages[i];
                 }
                if (ages[i]>=younger){
                    younger = ages[i];
                }
}
// Step 7: Print in console the older and younger index is it correct?

console.log(older);
console.log(younger);

// Step 8: A function can return only a single value if you had to output the two values
output.push(older);
output.push(younger);

return output;
}
// Step 9: Add the older value first on the output array
var output = calculateYoungerAndElder(names,ages);
console.log (output);
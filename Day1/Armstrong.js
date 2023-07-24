let number;
number = "153"; 
let n = number.length;

let sum = 0; 
let i=0;

while(i<n)
{
    let digit = number[i]; 
    sum += Math.pow(digit,n);
    i++; 
}

if(sum == number)
{
    console.log(number, "is an Armstrong Number");
}
else{
    console.log(number, "is not an Armstrong Number");
}

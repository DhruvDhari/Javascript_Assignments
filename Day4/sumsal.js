let salaries=[21000,90000,7500,3200,30000];
let sum=salaries.reduce((a,b)=>{
    return (b>10000?a+b:a);

},0);

console.log(sum);


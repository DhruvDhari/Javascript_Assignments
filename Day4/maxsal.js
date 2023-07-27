let salaries=[21000,90000,107500,3200,30000];
let max=salaries.reduce((a,b)=>{
    return Math.max(a,b);

},0);

console.log(max);
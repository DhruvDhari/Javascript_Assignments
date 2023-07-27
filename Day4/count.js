let salaries=[12000,9000,7500,13000,30000];
let count=salaries.reduce((a,b)=>{
    
    return (b>10000?a=a+1:a);

},0);

console.log(count);
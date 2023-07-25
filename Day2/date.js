let today=new Date();
let day=today.getDate();
let month=today.getMonth()+1;
let year=today.getFullYear();

console.log(`${month}-${day}-${year}`);
console.log(`${month}/${day}/${year}`);
console.log(`${day}-${month}-${year}`);
console.log(`${day}/${month}/${year}`);
function calc(){
    let add=function(x,y){
        return x+y;
    }
    let sub=function(x,y){
        return x-y;
    }
    return[add,sub];
}

let a=calc()[0](1,4);
let b=calc()[1](5,2);

console.log(a);
console.log(b);
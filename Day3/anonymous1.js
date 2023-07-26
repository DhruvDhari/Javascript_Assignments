function calc(){
    let add=function(x,y){
        return x+y;
    }
    let sub=function(x,y){
        return x-y;
    }
}

let a=calc().add(1,4);
let b=calc().sub(5,2);

console.log(a);
console.log(b);
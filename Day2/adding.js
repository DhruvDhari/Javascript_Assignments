function add(...args){
    let sum=0;
    for(let i in args){
        if(args[i] instanceof Array){
            for(let j=0;j<args[i].length;j++){
                sum=isNaN(sum+parseInt(args[i][j]))?0:sum+parseInt(args[i][j]);
            }
            continue;
        }
        sum=isNaN(sum+parseInt(args[i]))?0:sum+parseInt(args[i]);
    }
    console.log(sum);
}

add(2,3,"10");
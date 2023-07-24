function add(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        if(arguments[i] instanceof Array){
            for(let j=0;j<arguments[i].length;j++){
                sum=isNaN(sum+parseInt(arguments[i][j]))?0:sum+parseInt(arguments[i][j]);
            }
            continue;
        }
        sum=isNaN(sum+parseInt(arguments[i]))?0:sum+parseInt(arguments[i]);
    }
    console.log(sum);
}

add(1,2,[3,4]);
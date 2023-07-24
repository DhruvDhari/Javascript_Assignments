function Isprime(n){
    let i=2;
    if(n<2){
        console.log(`${n} is not a prime number `);
        return;
    }
    for(i;i<(n/2)+1;i++){
        if(n%i==0){
            console.log(`${n} is not a prime number `);
            return;
        }

        console.log(`${n} is a prime number 🙃` );
        return;
    }

}
Isprime(1);
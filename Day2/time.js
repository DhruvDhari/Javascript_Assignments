function time() {
    let x="AM";
    let mydays ={0:"Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednesday",4:"Thursday",5:"Friday",6:"Saturday"};
    let date = new Date();
    let day = date.getDay();
    if(date.getHours()>=12){
        x="PM";
    }
    
    console.log("Today is",mydays[day])
    console.log(`Current time is : ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${x}`);
}

time();
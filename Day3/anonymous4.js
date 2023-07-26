let x = function () {  
    let today=new Date();
    let day=today.getDate();
    let month=today.getMonth()+1;
    let year=today.getFullYear();

    console.log(`${day}/${month}/${year}`);

};  

x();
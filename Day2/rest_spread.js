//for rest arguments

function func1(firstName, lastName, ...otherInfo) { 
    return otherInfo;
  }
  
console.log(func1("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"));

/****************************************** */

  
//for spread arguments
function func2(firstName, lastName, company) { 
    return `${firstName} ${lastName} runs ${company}`;
  }
  

console.log(func2(...["Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"]));
  
 
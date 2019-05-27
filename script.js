/* JavaScript code here */
console.log("External javascript");



//task 2: Summation of array

function sum(arr){

    var sum=0;
    arr.forEach(function(item,index) {
    sum=sum+item;
})

return sum;
}

console.log(sum([1,2,3,6]))

//Task 3 email address  checking

function validateEmail(email){

    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
 
 }
 
 
 var checkEmail=validateEmail('aafsj')
 console.log(checkEmail)
 console.log(validateEmail('anf@gmail.com'))
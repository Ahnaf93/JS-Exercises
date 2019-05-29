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


 //OBJECT Example//

 var company = {
    name: 'Google', 
    age: 19, 
    ceo: {
    first_name: 'Sundar', 
    last_name: 'Pichai'
    }
    };


    
    company.updateAge=function(age){
        return age;
    }

    company.updateAge=(23);

    delete company.name

    console.log(company)


//TASK-4: Access object property at a specific index of array//

    var library = [ 
        {
            author: 'Bill Gates',
            title: 'The Road Ahead',
            readingStatus: true
        },
        {
            author: 'Steve Jobs',
            title: 'Walter Isaacson',
            readingStatus: true
        },
        {
            author: 'Suzanne Collins',
            title:  'Mockingjay: The Final Book of The Hunger Games', 
            readingStatus: false
        }];

        
        //to print the reading status of any given index//
        
        function getreadingStatus(index) {
            return library[index].readingStatus
          }
          console.log(getreadingStatus(2))


          function getproperty(index, property) {
            return library[index][property]
          }


          console.log(getreadingStatus(2, 'author'))
     
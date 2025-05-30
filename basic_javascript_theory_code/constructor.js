// function createObject() {
//   let obj = {};

//   obj.property1 = "value1";
//   obj.method1 = function() {
//     console.log("Method 1");
//   };

//   return obj;
// }

// let newObj = createObject();
// newObj.method1(); // Output: Method 1

// function adderess(adress)
// {
   
// }


// function studentdetails(fname , lname , classes , rollno ,adress)
// {

//     let add = adderess(adress)
//     let student = {}

//     student.fname = fname;
//     student.lname = lname;
//     student.class = classes;
//     student.rollno = rollno;

//     student.getstddata = function(){
//         console.log(this.fname + " " + this.lname +" " + this.class + " " + this.rollno)
//     };

//    return student;
// }



// let student1 = studentdetails("kiran" , "kasana" , 10 , 22  , "bhoj")
// let student2 = studentdetails("suman" , "kasana" , 10 , 23 , "sika")
// let student3 = studentdetails("sapna" , "kasana" , 10 , 24 , "dausa")

// student1.getstddata()
// student2.getstddata()
// student3.getstddata()

// printname .getdata()


// console.log(this);


// function fun(name , lname)
// {
//     let obj = {}
//     obj.name = name
//     obj.lname = lname
//     obj.getdata = function()
//     {
//         console.log(this.name +  " "  + this.lname)
//     }

//     return obj
// }

// let getfun = fun("kiran" , "kasana")
//     getfun = fun("suman" , "kasana")
//     getfun = fun("sapna" , "kasana")
//     getfun = fun("mahesh" , "kasana")
// getfun.getdata()


//call

// let person = {
//     fname : "kiran",
//     greet:function(age , occupation)
//     {
//         console.log(`name is ${this.fname} and age is ${age} and work as a ${occupation}.`)
//     }
// };


// let person2 = { fname : "kasana"};


// // person.greet.apply(person2 , [50 , "develop"])

// let greetfunc = person.greet.bind(person2 , 40 , "work")

//  greetfunc()





function constructorname(parama){
    this.paro1 = "kiran",
    this.paro2 = "kasana",
    this.method = function(){
        console.log(`${paro1} , ${paro2} , ${parama}`)
    }
}

let getdata = new constructorname("parama")

// let arr = [1,23,4,5,6,7,8,4]

// let value = arr.map(num => num*2).filter(num => num > 10)

// console.log(value)

// let people = [
//     {name:"kiran" , age:22},
//     {name:"suman" , age:24},
//     {name:"sapna" , age:26},
//     {name:"mahesh", age:28}
// ];

// people.sort(function(a,b)
// {
//   return a.age.localeCompare(b.age)
// })

// console.log(people)

// let arr = [2,5,3,7,4,8,3,1,3]

// let newarr = arr.filter(function(num)
// {
//     return num > 3
// })

// console.log(newarr)





let arr = [2,1,3]

let newarr = arr.reduce(function(prev , curr)
{
    return prev + curr
} , 0)

console.log(newarr)

























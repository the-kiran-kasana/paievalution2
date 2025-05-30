// async function getdata()
// {
//    let response = await fetch('https://fakestoreapi.com/products/1')

//    let data = await response.json()

//    console.log(data)
// }

// getdata()


async function getdata()
{
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let name = await response.json()
    console.log(name)
}

getdata()
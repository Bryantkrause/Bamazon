const mysql = require('mysql2')
const inquirer = require('inquirer')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'bamazon_db',
})


// let whatYouWant = items => {

//     inquirer.prompt({
//         type: 'list',
//         name: 'item',
//         message: 'Please select item to buy',
//         choices: [items]
//     })
// }

// let forSale = (items, test) => {
//         db.query(`Select * FROM products`, (e, data) => {
//         if (e) {console.log(e)}
//         for (i = 0; i < data.length; i++) {
//             console.log(`Item ID:${data[i].item_id} Item Name:${data[i].product_name}`)
//             items.push(data[i].item_id)}
//         console.log(items)
       
//         process.exit()})}
// forSale(items => {
//     inquirer.prompt({
//         type: 'list',
//         name: 'item',
//         message: 'Please select item to buy',
//         choices: [items]
//     })
// })


// const adder = (a,b,id) => {
//   let id = inquirer.prompt({
//     type: 'list',
//     name: 'item',
//     message: 'Please select item to buy',
//     choices: [items]
// })
//   cb(id)
// }

// adder(12, 9, id => {
//     db.query(`Select * FROM products`, (e, data) => {
//         if (e) {console.log(e)}
//         for (i = 0; i < data.length; i++) {
//             console.log(`Item ID:${data[i].item_id} Item Name:${data[i].product_name}`)
//             id.push(data[i].item_id)}
//   console.log(id)
// })})

// let arr =[]

// let update = (a,b,test) => {
//     arr.push(a)
//     test(arr)
// }

// update(1,2, arr=>{
//     let arr =[]
//     console.log(arr)
// })

// .then(data => {
//     inquirer.prompt({
//         type: 'input',
//         name: 'quantity',
//         message: 'please enter how many you would like to buy.'
//     })
// })

function processArray(arr, callback) {
    var resultArr = new Array(); 
    for (var i = arr.length-1; i >= 0; i--)
        resultArr[i] = callback(arr[i]);
    return resultArr;
}

var arr = [1, 2, 3, 4];
var arrReturned = processArray(arr, function(arg) {return arg * -1;});
// arrReturned would be [-1, -2, -3, -4]
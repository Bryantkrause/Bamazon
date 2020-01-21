const mysql = require('mysql2')
const inquirer = require('inquirer')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'bamazon_db',
})

let items = []

// let letItStart = items => {
 
//         if (items.length > 0) {
//             console.log('yes')
//         } else {
//             letItStart()
//         }
//     }

// letItStart()


// $("button").click(() =>{
//     $("p").hide("slow", () =>{
//       alert("The paragraph is now hidden");
//     });
//   });

let whatYouWant = () => {
    inquirer.prompt({
        type: 'list',
        name: 'item',
        message: 'Please select item to buy',
        choices: [items]
    })
}

let forSale = () => {
    db.query(`Select * FROM products`, (e, data) => {
        if (e) {console.log(e)}
        for (i = 0; i < data.length; i++) {
            console.log(`Item ID:${data[i].item_id} Item Name:${data[i].product_name}`)
            items.push(data[i].item_id)}
        console.log(items)
        process.exit()})
whatYouWant(forSale())





// .then(data => {
//     inquirer.prompt({
//         type: 'input',
//         name: 'quantity',
//         message: 'please enter how many you would like to buy.'
//     })
// })
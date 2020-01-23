const mysql = require('mysql2')
const inquirer = require('inquirer')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'bamazon_db',
})

let items = []
const forSale = () => {

// diplay how many of each item is available
    db.query(`Select * FROM products`, (e, data) => {
        if (e) {
            console.log(e)
        }
        data.forEach(({}))
        for (i = 0; i < data.length; i++) {
            console.log(`Item ID:${data[i].item_id} Item Name:${data[i].product_name} Item Quantity${data[i].stock_quantity}`)
            items.push(data[i].item_id)
        }
        console.log(items)


    })
    whatYouWant()
}


let whatYouWant = () => {
// prompt user to select item and quantity of item
    inquirer.prompt([{
            type: 'list',
            name: 'item',
            message: 'Please select item to buy',
            choices: [1, 2, 3, 4, 5]
        }, {
            type: 'input',
            name: 'qty',
            message: 'Please enter how many you would like to buy.'
        }])
        .then(data => {
            // check to see if we have that many quantity 
            // if we do process the request and remove those items from the data base
            // if we do not let the customer know that the quantity is less than that.
        })

}

forSale()
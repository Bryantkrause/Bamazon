function createQuote(quote, callback){ 
    var myQuote = "Like I always say, " + quote;
    callback(myQuote); // 2
  }
  
  function logQuote(quote){
    console.log(quote);
  }
  
  createQuote("eat your thingies!", logQuote); // 1
  
  // Result in console: 
  // Like I always say, eat your vegetables!

  const messager = (message, send) => {
    let bottle = message
    send(bottle)
}
messager('this is a message in a bottle', bottle => {
    console.log(bottle)
})

// let arr =[1,2,3]

//   function pleaseWork(){}
//   let whatYouWant = () => {
//     inquirer.prompt({
//         type: 'list',
//         name: 'item',
//         message: 'Please select item to buy',
//         choices: [items]
//     })
// }

// let forSale = () => {
//     db.query(`Select * FROM products`, (e, data) => {
//         if (e) {console.log(e)}
//         for (i = 0; i < data.length; i++) {
//             console.log(`Item ID:${data[i].item_id} Item Name:${data[i].product_name}`)
//             items.push(data[i].item_id)}
//         console.log(items)
//         process.exit()})
// whatYouWant(forSale())
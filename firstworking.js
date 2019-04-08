var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'bamazon',
})

connection.connect(function(err) {
    if (err) throw err;
    startInventoryCheck();
});

function startInventoryCheck() {
    var query = 'SELECT * FROM products';
    connection.query(query, function(err,res) {
    if (err) throw err;
    inquirer
    .prompt([{
        name: 'inventoryCheck',
        type: 'list',
        choices: function() {
            var choiceArray = [];
            for (var i = 0; i < res.length; i++) {
              choiceArray.push(res[i].product_name);

            }
            return choiceArray;
          },
        message: "Which item would you like to buy?",


    }, {
        name: 'quantiy',
        type: 'input',
        message: "How many would you like to buy?",
    }]).then(function(answer) {
         var chosenItem;
         for (var i = 0; i < res.length; i++) {
             if (results[i].product_name === answer.choice) {
                 chosenItem = res[i];
             }
         }

         if (chosenItem.stock_quantity < parseInt(answer.quanity)) {
             connection.query('UPDATE products SET ? WHERE ?',
             [
                 {
                     stock_quantity: 
                 },
                 {
                     id: chosenItem.id
                 }
             ],
            )
         }
     })
    });
}

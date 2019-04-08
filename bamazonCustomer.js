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
        'SELECT item_id, product_name, price, stock_quantity FROM products WHERE ?', {
            product_name: answer.product_name 
        },
        function (err, res) {
            if (err) throw err;
                var quantity = res[0].stock_quantity;
                var price = res[0].price;
                var updatedQty = quantity - parseInt(answer.quantity)
                var orderTotal = (price * parseInt(answer.quantity))

            if (quantity < answer.quantity) {
                console.log('Insufficient quantity! Select a smaller number of products');
                startInventoryCheck();
            } else {
                connection.query('UPDATE products SET ? WHERE ?',
                [{
                    stock_quantity: updatedQty
                },
                {
                    product_name: answer.product_name
                }
                ],
                function(err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Order is confirmed!');
                        console.log(`Total cost: ${orderTotal}`);
                        startInventoryCheck();
                    }
                    })
                }
            }
        })
    })
}


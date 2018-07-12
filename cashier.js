// Below are the use cases and functional specification for The Cashinator 3000.

// As a cashier, I can initialize the cash register with a price list in a simple comma-delimited format. The price list contains product names, SKU's (stock-keeping units, i.e., the product id), the price per unit, and whether the product is taxable. (Staple groceries are typically not taxable.)
// As a cashier, I can initialize the register with a starting amount of money.
// As a cashier, I can initialize the register with a sales tax percentage.
// As a cashier, when I am not actively handling a customer transaction, I can choose to view the current balance of cash that the register contains.
// As a cashier, I can start a new transaction. Transactions have id's and are time-stamped upon creation.
// As a cashier, I can scan one item, whereupon that item is added to the transaction.
// As a customer, I can see the last item scanned and a running subtotal of the current transaction cost.
// As a cashier, I can input the money received from the customer, thus closing out the transaction.
// Change is calculated to minimize the number of bills and coins that must be handled by the cashier.
// As a customer, I can see the grand total and how much change I am to receive.
// As a customer, I can see an itemized receipt of my purchases.
// As a cashier, I can view a report of all the transactions that have occurred since register initialization. Transactions are listed by id, # of items purchased, and the transaction amount.
// As a cashier, I can search all items purchased since register initialization. I can do a partial string match on product name.
// Again, do not construct a user interface for this application -- but do create a clean API (not a client-server API, mind you, a code API) that will allow the future UI layer of The Cashinator 3000 to render the data in a variety of ways, decoupled from the business logic of generating that data.


const Cashier = function(value) {
    this.initialValue = value //x
    this.Taxpercentage = 100 // 
    this.priceList = items;
}

Cashier.prototype.currentBalance = function() {
  
}

Cashier.prototype.subTotal = function() {

}

Cashier.prototype.addValueOfItem = function() {

}

Cashier.prototype.searchItem = function() {

}

Cashier.prototype.newItem = function() {
    
}
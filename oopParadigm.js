//oop concept of code redundancy

var purchase1 = {
    shoes: 10,
    stateTax: 1.2,
    totalPrice: function () {
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log('total price :', calculation);
    }
}
purchase1.totalPrice()
var purchase2 = {
    shoes: 70,
    stateTax: 2,
    totalPrice: function () {
        var calculation = purchase2.shoes * purchase2.stateTax; //as both using the same function so we make it custom by using this keyword
        console.log('total price :', calculation);
    }
}
purchase2.totalPrice()


var purchase1 = {
    shoes: 10,
    stateTax: 1.2,
    totalPrice: function () {
        var calculation = this.shoes * this.stateTax;
        console.log('total price :', calculation);
    }
}
purchase1.totalPrice()

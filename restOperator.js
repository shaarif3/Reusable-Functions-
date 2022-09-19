const CousinsList = ["shaarif", "affan", "maaz",
    "shaheer", "maaz", "azalfa", "areeba"];
const [first, second, three, ...restList] = CousinsList;
console.log(first, second, three, "top 3 czns")
console.log(...restList, 'rest of the czns')
//how rest operator works it holds the rest of the list except one which are given in the parameter.

//Also we use rest parameter in functions
function AddTaxToPrices(taxRate, ...itemsBought) {
    return itemsBought.map((item) => taxRate * item)

}
let ShoppingCart = AddTaxToPrices(1.5, 54, 45, 56, 89, 94);
console.log(ShoppingCart)
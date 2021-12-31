// Make a function that takes an array given as input and modifiy the array replacing detail object in array without detail object.
var OrderArray = [
  {
    user: "Maaz",
    isActive: true,
    details: {
      orderId: "63",
      salesPerson: "John Doe",
      deliveryDate: "07/17/2021",
      invoiceNumber: "00000063",
      customerName: "ABC Market",
      customerPo: "aaaa",
      invoiceTotal: "$0.00",
      warehouse: "WH 40",
      fulfillmentStatus: "",
      deliveryMethod: "WILL_CALL",
      shipVia: "",
    },
  },
  {
    user: "Saboor",
    isActive: true,
    details: {
      orderId: "61",
      salesPerson: "John Doe",
      deliveryDate: "07/17/2021",
      invoiceNumber: "00000063",
      customerName: "ABC Market",
      customerPo: "aaaa",
      invoiceTotal: "$0.00",
      warehouse: "WH 40",
      fulfillmentStatus: "",
      deliveryMethod: "WILL_CALL",
      shipVia: "",
    },
  },
  {
    user: "Shaarif",
    isActive: false,
    details: {
      orderId: "101",
      salesPerson: "John Doe",
      deliveryDate: "07/17/2021",
      invoiceNumber: "00000063",
      customerName: "ABC Market",
      customerPo: "aaaa",
      invoiceTotal: "$0.00",
      warehouse: "WH 40",
      fulfillmentStatus: "",
      deliveryMethod: "WILL_CALL",
      shipVia: "",
    },
  },
  {
    user: "Iqra",
    isActive: true,
    details: {
      orderId: "65",
      salesPerson: "John Doe",
      deliveryDate: "07/17/2021",
      invoiceNumber: "00000063",
      customerName: "ABC Market",
      customerPo: "aaaa",
      invoiceTotal: "$0.00",
      warehouse: "WH 40",
      fulfillmentStatus: "",
      deliveryMethod: "WILL_CALL",
      shipVia: "",
    },
  },
];

const myFunction = (array) => {
  var newObj;
  //   var res = array.map((item, index) => {
  // newObj = { ...item.details, user: item.user, isActive: item.isActive };

  // deconstruction performed
  var res = array.map(({ user, isActive, details }) => {
    newObj = { ...details, user, isActive };
    console.log(newObj);
    return newObj;
  });
  return res;
};

var result = myFunction(OrderArray);
console.log(result, "Expected Output");

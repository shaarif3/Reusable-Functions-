// Make a function that takes an object and replace the object in an array on basis of OrderId
var OrderArray = [
  {
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
  {
    orderId: "66",
    salesPerson: "test admin",
    deliveryDate: "08/24/2021",
    invoiceNumber: "00000066",
    customerName: "ABC Market",
    customerPo: null,
    invoiceTotal: "$0.00",
    warehouse: "WH 40",
    fulfillmentStatus: "",
    deliveryMethod: "WILL_CALL",
    shipVia: "",
  },
  {
    orderId: "74",
    salesPerson: "test admin",
    deliveryDate: "10/29/2021",
    invoiceNumber: "00000074",
    customerName: "ABC Market",
    customerPo: "4523423",
    invoiceTotal: "$0.00",
    warehouse: "WH 40",
    fulfillmentStatus: "",
    deliveryMethod: "DELIVERY",
    shipVia: "",
  },
  {
    orderId: "64",
    salesPerson: "test admin",
    deliveryDate: "08/17/2021",
    invoiceNumber: "00000064",
    customerName: "ABC Market",
    customerPo: "12345",
    invoiceTotal: "$0.00",
    warehouse: "WH 40",
    fulfillmentStatus: "",
    deliveryMethod: "WILL_CALL",
    shipVia: "",
  },
  {
    orderId: "70",
    salesPerson: "test admin",
    deliveryDate: "10/14/2021",
    invoiceNumber: "00000070",
    customerName: "ABC Company Inc.",
    customerPo: null,
    invoiceTotal: "$0.00",
    warehouse: "WH 40",
    fulfillmentStatus: "",
    deliveryMethod: "WILL_CALL",
    shipVia: "",
  },
  {
    orderId: "71",
    salesPerson: "test admin",
    deliveryDate: "10/15/2021",
    invoiceNumber: "00000071",
    customerName: "ABC Market",
    customerPo: null,
    invoiceTotal: "$0.00",
    warehouse: "WH 40",
    fulfillmentStatus: "",
    deliveryMethod: "WILL_CALL",
    shipVia: "",
  },
  {
    orderId: "67",
    salesPerson: "test admin",
    deliveryDate: "08/28/2021",
    invoiceNumber: "00000067",
    customerName: "ABC Market",
    customerPo: null,
    invoiceTotal: "$0.00",
    warehouse: "WH 40",
    fulfillmentStatus: "",
    deliveryMethod: "WILL_CALL",
    shipVia: "",
  },
  {
    orderId: "69",
    salesPerson: "test admin",
    deliveryDate: "10/12/2021",
    invoiceNumber: "00000069",
    customerName: "ABC Market",
    customerPo: "1234567",
    invoiceTotal: "$0.00",
    warehouse: "WH 40",
    fulfillmentStatus: "",
    deliveryMethod: "DELIVERY",
    shipVia: "",
  },
  {
    orderId: "72",
    salesPerson: "test admin",
    deliveryDate: "10/15/2021",
    invoiceNumber: "00000072",
    customerName: "ABC Market",
    customerPo: null,
    invoiceTotal: "$0.00",
    warehouse: "WH 40",
    fulfillmentStatus: "",
    deliveryMethod: "WILL_CALL",
    shipVia: "",
  },
  {
    orderId: "65",
    salesPerson: "Butch Hill",
    deliveryDate: "08/23/2021",
    invoiceNumber: "00000065",
    customerName: "ABC Market",
    customerPo: "252123",
    invoiceTotal: "$0.00",
    warehouse: "WH 40",
    fulfillmentStatus: "",
    deliveryMethod: "WILL_CALL",
    shipVia: "",
  },
];
var replaceData = {
  orderId: "72",
  salesPerson: "changed Admin",
  deliveryDate: "10/15/2022",
  invoiceNumber: "0111172",
  customerName: "Brisktech",
  customerPo: null,
  invoiceTotal: "$0.90",
  warehouse: "WH 20",
  fulfillmentStatus: "",
  deliveryMethod: "WILL_CALL",
  shipVia: "Null",
};

console.log(OrderArray, "-->Array");
console.log(OrderArray.length, "-->Length of Array");
// console.log(OrderArray[0].orderId, "-->OrderId");
const myFunction = (compObj) => {
  for (var i = 0; i <= OrderArray.length; i++) {
    if (OrderArray[i]?.orderId === compObj?.orderId) {
      console.log("found at index", i);
      OrderArray[i] = compObj;
      return OrderArray;
    } else {
      // console.log("not found at index", i);
      console.error("invalid id! , id didn't exist");
    }
  }
};

const result = OrderArray;
console.log(result, "Final Array");
myFunction(replaceData);

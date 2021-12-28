// Make a function() that takes an object as argument and return an array of errors.
// sample argument{
// name:Your Name,
// class: "",
// id : 1234,
// birthday:""
// }

// expected output :
// ["class is required",birthday is required]

// Activity!!

const bioData = {
  user: "Shaarif",
  age: 22,
  phone: "",
  address: "",
  email: "",

};

const throwErrors = (obj) => {
let Errors = [];

  //   console.log(obj, "check");
  objLength = Object.keys(obj).length;
  // console.log(objLength)

  for (var i = 0; i < objLength; i++) {
    var key = Object.keys(obj)[i];
    var val = obj[key];
    // console.log(val,"key val")
    if (val === "") {
      Errors.push(`${key} is missing`);

      //   console.log(Error);
      // console.log("fill in the given fields first that are", array)
    }

    // console.log(key,val)
    // console.log(val)
  }
  return Errors;
};

const result = throwErrors(bioData);
console.log(result);

// Make a function that takes and object and array of keys from user (parameters) and omit the key value from object and return new object without effecting real one.
object = {
  firstName: "Muhammad",
  lastName: "Shaarif",
  father: "Shamim Akhter Shahid",
  mobile: "03112564857",
  cnic: "5240111685718",
  isActive: false,
};
key = ["mobile", "father"];

let newObject = { ...object };

const myFunc = (input, keys) => {
  let newObject = { ...input };
  keys.map((item) => {
    delete newObject[item];
  });
  return newObject;
};

const result = myFunc(newObject, key);
console.log(result);

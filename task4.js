// Take an object apply validation and generate uniqueId also apply dashes in cnic and mobile# fields and genrate a new updated object
let obj = {
  firstName: "Muhammad",
  lastName: "Shaarif",
  cnic: "4261023929369",
  father: "Shamim AKhter Shahid",
  mobile: "",
  isActive: false,
};
const treatUser=(user)=>{
const err=getErrors(user)
if(err) return 
const user=validation(user)


}
const validation = (inp) => {
  let finalObj = {};
  // let errArray = [];
  // let obj_keys = Object.keys(inp);
  // obj_keys.map((item) => {
  //   // console.log(item, ":" , inp[item])
  //   if (obj[item] == "") {
  //     errArray.push(`${item} field is empty`);
  //     return;
  //   }
  //   if (item === "mobile" && inp[item].length != 11) {
  //     errArray.push(`${item} field must contain 11-digits`);
  //     return;
  //   }
  //   if (item === "cnic" && inp[item].length != 13) {
  //     errArray.push(`${item} field must contain 13-digits`);
  //     return;
  //   }
  // });

  // Object.keys(inp).map((set) => {
  //   if (set === "father") {
  //     finalObj.father = inp[set];
  //   }
  //   if (set === "cnic") {
  //     finalObj.cnic = inp[set];
  //   }
  //   if (set === "isActive") {
  //     finalObj.isActive = inp[set];
  //   }
  //   if (set === "mobile") {
  //     finalObj.mobile = inp[set];
  //   }
  // });

  finalObj.name = mergeName(obj);
  finalObj.uid = genUID();
  finalObj.uid = genUID();
  finalObj.mobile = Formator(finalObj.mobile, 4, 1);
  finalObj.cnic = Formator(finalObj.cnic, 5, 2);
  console.log(finalObj);
  console.log(errArray);
};

const mergeName = (inp) => {
  let nameArray = [];
  let obj_keys = Object.keys(inp);
  Object.keys(inp).map((item) => {
    // console.log(item, ":" , inp[item])
    if (item === "firstName") {
      nameArray.push(inp[item]);
    } else if (item === "lastName") {
      nameArray.push(inp[item]);
    }
  });
  let name = nameArray.join().replace(",", " ");
  return name;
};

const genUID = () => {
  let uuid = Date.now().toString(26) + Math.random(100).toString(36);
  let uid = uuid.split(".");
  // console.log(uid.join(""));
  // console.log(uid.join("").length);
  return uid.join("");
};
const Formator = (number, digits, howMany) => {
  if (howMany <= 1) {
    let mobile = `${number.slice(0, digits)}-${number.slice(digits, 12)} `;
    return mobile;
  } else if (howMany >= 2) {
    let cnic = `${number.slice(0, digits)}-${number.slice(
      digits,
      12
    )}-${number.slice(11, 12)} `;
    return cnic;
  }
};

const getErrors=(inp)=>{
  let finalObj = {};
  let errArray = [];
  let obj_keys = Object.keys(inp);
  obj_keys.map((item) => {
    // console.log(item, ":" , inp[item])
    if (obj[item] == "") {
      errArray.push(`${item} field is empty`);
      return;
    }
    if (item === "mobile" && inp[item].length != 11) {
      errArray.push(`${item} field must contain 11-digits`);
      return;
    }
    if (item === "cnic" && inp[item].length != 13) {
      errArray.push(`${item} field must contain 13-digits`);
      return;
    }
  });
  Object.keys(inp).map((set) => {
    if (set === "father") {
      finalObj.father = inp[set];
    }
    if (set === "cnic") {
      finalObj.cnic = inp[set];
    }
    if (set === "isActive") {
      finalObj.isActive = inp[set];
    }
    if (set === "mobile") {
      finalObj.mobile = inp[set];
    }
  });
  console.log(finalObj);
  console.log(errArray);
}
let result = validation(obj);

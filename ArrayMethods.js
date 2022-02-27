// Array methods
const array = [1, 2, 3, 4, 5, 6];

//foreach
array.forEach((num, i) => {
  console.log(num, 'number at index', i);
  console.log(num * 3, 'number at index', i);
});

//includes
const res = array.includes(4);
if (res) {
  console.log('yes its present in array');
} else {
  console.log('no its not present in array');
}

// filter
const filterRes = array.filter((num) => {
  return num > 3;
});
console.log(filterRes);

// Map
array.map((item, i) => {
  console.log(item, i);
  console.log(item + 1, i);
});

//some
const some = array.some((num) => {
  return num > 6 || num > 10 || num < 2;
  return num > 2;
});
console.log(some);

//every
const every = array.every((num) => {
  return num > 0;
});
console.log(every);

//reduce
const sum = array.reduce((a, b) => {
  return a + b;
});
console.log(sum);

//sort in asc or desc
const desc = array.sort((a, b) => (a > b ? -1 : 1));
console.log(desc);
const asc = desc.sort((a, b) => (a > b ? 1 : -1));
console.log(asc);

//from
const Name = 'Shaarif';
const res = Array.from(Name);
console.log(res);

// Of
const res = Array.of('s', 'h', 'a', 'a', 'r', 'i', 'f');
console.log(res);

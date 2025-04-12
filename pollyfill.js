let arr = [1, 4, 7, 55, 78, 89];

console.log("this outside", this);

Array.prototype.mymap = function (callback, context) {
  let newarr = [];

  for (let i = 0; i < this.length; i++) {

    newarr.push(callback.call(context,this[i],i,this))

  }

  return newarr;
};

let newArr = arr.mymap(
  function (i, index, x) {
    console.log(i, "===>", x);
    console.log("this", this);
    return i;
  },
  { factor: 6 }
);

console.log("newArr", newArr);



Array.prototype.npower = function (npower) {
  let newArr = [];

  this.forEach((i) => {
    newArr.push(i ** npower);
  });

  return newArr;
};


console.log(arr.npower(3));


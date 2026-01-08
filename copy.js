const original = {
  name: "Piyush",
  address: { city: "Delhi" },
  fun: function()  {
    console.log("first");
  },
  a:undefined
};

// const deep = {...original};
const deep = JSON.parse(JSON.stringify(original));

deep.address.city = "Mumbai";

console.log(deep);

// let Obj = {
//   name: "piyush",
//   address: {
//     city: "pune",
//   },
//   education: {
//     primary: {
//       schoolName: "ADV",
//       city: "patna",
//     },
//     secondry: {},
//   },
//   details: {
//     account: [1, 3],
//   },
// };

// function flattenObj(obj, perantKey = "", result = {}) {
//   Object.keys(obj).map((i) => {
//     if (typeof obj[i] !== "object") {
//       result[`${perantKey}${perantKey ? "-" : ""}${i}`] = obj[i];
//     } else {
//       if (Array.isArray(obj[i])) {
//         obj[i].forEach((item, index) => {
//           result[`${perantKey}${perantKey ? "" : ""}_${i}[${index}]`] = item;
//         });
//       } else {
//         flattenObj(obj[i], `${perantKey}${perantKey ? "-" : ""}${i}`, result);
//       }
//     }
//   });

//   return result;
// }

// console.log("flattenObj", flattenObj(Obj));

const input = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

function flattenObject(input, prefix = "", output = {}) {
  for (let i in input) {
    if (typeof input[i] === "object") {
      flattenObject(input[i], `${prefix}${i}.`, output);
    } else {
      output[`${prefix}${i}`] = input[i];
    }
  }
  return output;
}

console.log(flattenObject(input));

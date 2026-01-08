let arr = [[55, 67], 1, 2, 3, [3, 4, 6, 67, [23, 87, 98]]];

function flattenarray(arr, result = []) {
  arr.forEach((i) => {
    if (typeof i === "object") {
      flattenarray(i, result);
    } else {
      result.push(i);
    }
  });

  return result;
}

console.log(flattenarray(arr));


let arr = [1, 2, 3,4];


let col = [];
function subSequence(arr, l, h) {
  if (col.length > 0) {
    console.log(col);
  }
  for (let i = l; i < h; i++) {
    col.push(arr[i]);
    subSequence(arr, i + 1, h);
    col.pop();
  }
}

subSequence(arr, 0, arr.length);
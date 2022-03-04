//Enter code here

function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0].trim();
    let arr = new Array(n - 1);
    for (var i = 1; i <= n; i++) {
      arr[i - 1] = input[i].trim().split(" ").map(Number);
    }
    p(arr, n);
  }
  
   process.stdin.resume();
      process.stdin.setEncoding("ascii");
      let read = "";
      process.stdin.on("data", function (input) {
        read += input;
      });
      process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
      });
      process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0) ;
      });
      
      
      
  function p(mat, n) {
    let left = 0;
    let top = 0;
    let right = n-1;
    let bottom = n-1;
  
    for (let j = 0; j < Math.floor(n / 2); j++) {
      let pre = mat[top + 1][left];
      for (k = left; k <= right; k++) {
        let temp = mat[top][k];
        mat[top][k] = pre;
        pre = temp;
      }
      top++;
      for (let k = top; k <= bottom; k++) {
        temp = mat[k][right];
        mat[k][right] = pre;
        pre = temp;
      }
      right--;
      for (let k = right; k >= left; k--) {
        temp = mat[bottom][k];
        mat[bottom][k] = pre;
        pre = temp;
      }
      bottom--;
      for (let k = bottom; k >= top; k--) {
        temp = mat[k][left];
        mat[k][left] = pre;
        pre = temp;
      }
      left++;
    }
  
    for (b = 0; b < mat.length; b++) {
      console.log(mat[b].join(" "));
    }
  }
  
  
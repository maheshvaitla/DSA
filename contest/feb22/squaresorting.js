//Enter code here
function runProgram(input){
    input=input.split("\n");
    let t=+input[0]
    let line=1;
    for(let i=0;i<t;i++){
        let n=+input[line++]
        let arr = input[line++].trim().split(" ").map(Number);
       console.log(p(n,arr))
    }
}

function p(n,arr){
    for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if(arr[i] * arr[i] < arr[j] * arr[j]){
        [arr[i], arr[j]] = [arr[j], arr[i]];
      } else if (arr[i] * arr[i] == arr[j] * arr[j]) {
        if (i > j) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        } else [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }
  return arr.join(" ");
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
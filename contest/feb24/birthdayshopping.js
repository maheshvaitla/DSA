//Enter code here



function runProgram(input){
    input=input.split("\n");
    let [n,k]=input[0].trim().split(" ").map(Number);
    p(n,k);
}

//subsets
function p(n, m) {
  let arr = [];
  let sub = [[]];
  for (let i=1;i<=n;i++) {
    let l = sub.length - 1;
    for (let j = 0; j <= l; j++) {
      sub.push([...sub[j], i]);
    }
  }
  
  sub = sub.sort();
  //console.log(sub)
  for (let i = 0; i < sub.length; i++) {
    if (sub[i].length == m) console.log(sub[i].join(" "));
  }
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
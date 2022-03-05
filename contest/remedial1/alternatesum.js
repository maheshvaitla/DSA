//Enter code here

function runProgram(input){
    input=input.split("\n");
    let n=+input[0];
    let arr=input[1].trim().split(" ").map(Number);
    p1(n,arr)
}
function p1(n,arr){
    let sum=0;
    for(let i=0;i<n;i++){
        if(i%2==0){
            sum+=arr[i]
        }
    }
    console.log(sum)
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
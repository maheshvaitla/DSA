//Enter code here
function runProgram(input){
    input=input.split("\n");
    let n=+input[0]
    console.log(fun(n))
}
function fun(n){
    if(n==0 || n==1){
        return 1
    } if(n==2){
        return 2
    }else {
        return fun(n-1)+fun(n-2)+fun(n-3)
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
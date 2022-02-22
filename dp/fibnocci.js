//Enter code here
function runProgram(input){
    input=input.split("\n");
    let n=+input[0]
    console.log(p(n))
}
function p(n){
    var cache = new Array(n +1);
    cache[0] = 0;
    cache[1] = 1;
    for(i = 2; i <=n; i++){
        cache[i] = cache[i - 1] + cache[i - 2];
    }
    return cache[n];
    
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
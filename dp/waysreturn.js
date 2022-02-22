
function runProgram(input){
    input=+input;
    console.log(ways1(input));
}
function ways1(input){
    
    var dp = new Array(30).fill(0);
    
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    
    for(var i = 3; i <= input; i++){
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
    }
    return dp[input];
    
}


  if (process.env.USERNAME === "Mahesh Vaitla") {
    runProgram(`5`);
  } else {
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
  }
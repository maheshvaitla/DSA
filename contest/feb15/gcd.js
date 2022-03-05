

function runProgram(input){
    input=input.split("\n");
    let t=+input[0];
    let line=1;
    for(let i=0;i<t;i++){
        let [a,b]=input[line++].trim().split(" ").map(Number);
console.log(p1(a,b));
    }
}
function p1(a,b){
    if(a==0){
        return b
    } else {
        return  p1(b%a,a)
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
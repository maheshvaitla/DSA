//Enter code here
function runProgram(input){
    input=input.split("\n");
    let n=+input[0];
    let str=input[1].trim()
    p1(n,str);
}

function p1(n,str){
    let x=0;
    let y=0;
    for(let i=0;i<n;i++){
        if(str[i]=="u"){
            x++
        } else if(str[i]=="d"){
            x--;
        } else if(str[i]=="r"){
            y++
        } else if(str[i]=="l"){
            y--
        }
    }
    console.log(x+" " + y);
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
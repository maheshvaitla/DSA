//Enter code 
function runProgram(input){
    input=input.split("\n");
    let t=input[0];
    let line=1;
    for(let i=0;i<t;i++){
        let n=+input[line++]
        let arr=input[line++].trim().split(" ").map(Number)
        p(n,arr);
    }
}
function p(n,arr){
    let obj={};
    for(let i=0;i<n;i++){
        if(obj[arr[i]]===undefined){
            obj[arr[i]]=1
        } else {
            obj[arr[i]]=obj[arr[i]]+1
        }
    }
//console.log(obj)
let count=0;
let temp=0;
for(let k in obj){
    if(obj[k]>count){
        count=obj[k]
        temp=k
    }
}
//console.log(count)
console.log(count>Math.floor(n/2) ? temp : "-1")

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

//Enter code here
function runProgram(input){
    input=input.split("\n");
    let [n,k]=input[0].trim().split(" ").map(Number);
    let arr =input[1].trim().split(" ").map(Number);
    p1(n,k,arr)
}


 function p1(n,k,arr){
    let count = 0;
for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
        if(arr[i]+arr[j]==k){
            count++
        }
    }
}
console.log(count);
    
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
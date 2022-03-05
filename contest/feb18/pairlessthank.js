//Enter code here
function runProgram(input){
    input=input.split("\n");
    let t=+input[0];
    let line=1;
    for(let i=0;i<t;i++){
        
  
    let n=+input[line++];
    let arr=input[line++].trim().split(" ").map(Number);
    let k=+input[line++]
    p(n,arr,k)
    }
}

function p(n,arr,k){
  let max=-1;
  for(let i=0;i<n;i++){
      for(let j=i+1;j<n;j++){
          if(arr[i]+arr[j]<k){
            if(arr[i]+arr[j]>max){;
              max=arr[i]+arr[j]
}
          }
      }
  }
  console.log(max)
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
//Enter code here

function runProgram(input){
    input=input.split("\n");
    let n=+input[0];
    let arr =input[1].trim().split(" ").map(Number);
    p1(n,arr)
}

function p1(n,arr){
    let a=n/4
    let c1=0;
    let c2=0;
    let c3=0;
    let c4=0
    let ans=0
    for(let i=0;i<n/4;i++){
        ans=i
            c1+=arr[i]
        }
    for(let i=ans+1;i<2*a;i++){
        ans=i;
        c2+=arr[i]
    }
     for(let i=ans+1;i<3*a;i++){
        ans=i;
        c3+=arr[i]
    }
      for(let i=ans+1;i<4*a;i++){
        ans=i;
        c4+=arr[i]
    }
    console.log((2*c1)+c2+(2*c3)+c4)
        
        

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
    
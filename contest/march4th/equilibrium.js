//Enter code here
function runProgram(input){
    input=input.split("\n");
    let n=+input[0];
    let arr=input[1].trim().split(" ").map(Number);
    console.log(p(n,arr))
}

// function p(n,arr){
//     for(let i=0;i<n;i++){
//         let ls=0;
//         for(let j=0;j<i;j++){
//             ls+=arr[j]
//         }
//       let rs=0
//         for(let j=i+1;j<n;j++){
//             rs+=arr[j]
//         }
//         if(ls==rs){
//             return i+1
//         }
//     }
//     return -1
// }


function p(n,arr){
    let sum=0;
    for(let i=0;i<n;i++){
        sum+=arr[i]
    }
    
    let ls=0;
    for(let i=0;i<n;i++){
        sum-=arr[i]
        if(sum==ls){
            return i+1
        }
        ls+=arr[i]
    }
    return -1
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
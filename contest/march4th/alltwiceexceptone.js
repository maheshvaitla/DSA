//Enter code here

function runProgram(input){
    input=input.split("\n");
    let t=+input[0];
    let line=1;
    for(let i=0;i<t;i++){
        let n=+input[line++];
        let arr =input[line++].trim().split(" ").map(Number);
        console.log(p(n,arr))
    }
}

function p(n,arr){
    let res=arr[0];
    for(let i=1;i<n;i++){
        res=res^arr[i]
    }
    return res
}


/// O(n approcch)
// function p(n,arr){
//     let obj={}
//     for(let i=0;i<n;i++){
//         if(obj[arr[i]]===undefined){
//             obj[arr[i]]=1
//         } else {
//             obj[arr[i]]+=1
//         }
//     }
    
    
//     for(let k in obj){
//         if(obj[k]==1) {
//             return k
//         }
//     }
// }





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
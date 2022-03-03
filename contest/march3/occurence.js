//Enter code here

function runProgram(input){
    input=input.split("\n");
    let [n,k]=input[0].trim().split(" ").map(Number);
    let arr=input[1].trim().split(" ").map(Number);
    p1(n,k,arr)
}
function p1(n,k,arr){
    let low=0;
    let high=n-1
    let a=lower(arr,low,high,k)
    let b=higher(arr,low,high,k)
    console.log(b-a+1)
}

function lower(arr,low,high,k){
    let ans=0
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        if(arr[mid]==k){
            ans=mid
            high=mid-1
        } else if(arr[mid]>k){
            high=mid-1
        } else {
            low=mid+1
        }
    }
    return ans
}

function higher(arr,low,high,k){
    let ans=0
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        if(arr[mid]==k){
            ans=mid
            low=mid+1
        } else if(arr[mid]>k){
            high=mid-1
        } else {
            low=mid+1
        }
    }
    return ans
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
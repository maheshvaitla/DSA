//Enter code here

function runProgram(input){
    input=input.split("\n");
    let n=+input[0];
    let arr=input[1].trim().split(" ").map(Number);
    let max = p(n,arr)
    console.log(fun(n,arr,max))
}

function p(n,arr){
    let l=0;
    let h=n-1;
    while(l<=h){
        let mid=Math.floor(l+((h-l)/2));
        if(arr[mid]>arr[mid+1]){
            return mid
        } else if(arr[mid]<arr[mid-1]){
            return mid-1
        } else if(arr[l]<=arr[mid]){
            l=mid+1
        } else if(arr[h]>=arr[mid]){
            h=mid-1
        }
    }
    return -1
}

function fun(n,arr,max){
    let l=0;
    let h=n-1
    if(arr[l]<arr[h]){
        return "NO"
    }
    for (let i=1;i<=max;i++) {
    if (arr[i] < arr[i-1]) {
      return "NO";
    }
  }
  for (let i =max+2;i<n;i++) {
    if (arr[i]<arr[i-1]) {
      return "NO";
    }
  }
  return "YES";

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
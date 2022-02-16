let arr =[11,1,3,2,7,4,9]
let n=arr.length;

// we have to compare the adjacent lements and swap them accordingly 

for(let i=0;i<n;i++){
    for(let j=0;j<n-i-1;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp
        }
    }
}
console.log(arr);
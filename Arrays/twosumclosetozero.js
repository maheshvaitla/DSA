let arr =[1,2,6,9,-5,-2];

let n=arr.length;

let minsum=999;
for(let i=0;i<n-1;i++){
    let sum=0;
    for(let j=0;j<n;j++){
        sum=Math.abs(arr[i]+arr[j]);
        if(sum<minsum){
            minsum=sum
        }
    }
}
console.log(minsum);
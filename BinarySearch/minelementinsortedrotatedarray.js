let arr =[5,6,7,8,9,1,2,3,4]
let n=arr.length

function min(arr,n){
    let low=0;
    let high=n-1;
    if(arr[low]<=arr[high]){
        return;

    }
   while(low<=high){
       let mid=Math.floor(low+(high-low)/2);
       if(arr[mid]>arr[mid+1]){
           return arr[mid+1]
       } if(arr[mid]<arr[mid-1]){
           return arr[mid]
       }
       if(arr[low]<=arr[mid]){
           low=mid+1
       } if(arr[mid]<=arr[high]){
           high=mid-1
       }
   }
}
console.log(min(arr,n));
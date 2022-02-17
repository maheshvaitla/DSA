let arr =[5,10,30,20,40];
let n=arr.length;
let k=30;


function ans(arr,n){
let low=0;
let high=n-1;
while(low<=high){
    let mid=Math.floor(low+(high-low)/2);
    if(arr[mid]==k){
        return mid;
    } else if(mid-1>=low && arr[mid-1]==k){
        return mid-1
    } else if(mid+1<=high && arr[mid+1]==k){
        return mid+1
    } 
    if(arr[mid]>k){
        high=mid-1
    } else {
        low=mid+1
    }
}
}
console.log(ans(arr,n));
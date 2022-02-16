let arr =[1,2,3,4,5,6,7,8,9];
let n=arr.length
let k=9


function s(arr,n){
let low=0;
let high=n-1;
let ans=0
while(low<=high){
    let mid = Math.floor(low+((high-low)/2));
 
    if(arr[mid]==k){
       return ans=mid
    } 
 
    if(arr[mid]>k){
        high=mid-1
    } 
    
     if(arr[mid]<k){
        low=mid+1
    }
}
return -1
}
console.log(s(arr,n))

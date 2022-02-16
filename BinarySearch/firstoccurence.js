let arr =[1,1,1,4,5,6,7,8,9];
let n=arr.length
let k=1
console.log(s(arr,n))

function s(arr,n){
    let low=0;
    let high=n-1;
    ans=0
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        if(arr[mid]==k){
            ans=mid;
            high=mid-1;
        } 
        if(arr[mid]>k){
            high=mid-1
        } 
        if(arr[mid]<k){
            low=mid+1
            
        }
    }
    return ans
}
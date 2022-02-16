let arr =[1,2,3,4,5,6,7,8,12,15];
let n=arr.length;
let k=14;


let low=0;
let high=n-1;
let c=-1;
let f=-1;
while(low<=high){
    let mid=Math.floor(low+(high-low)/2);
    if(arr[mid]==k){
        c=mid;
        f=mid;
    }
    if(arr[mid]>k){
        f=mid;
        high=mid-1
    } else {
        c=mid;
        low=mid+1
    }
}
console.log(c,f)
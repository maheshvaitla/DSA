let n=25;

let low=0;
let high=Math.floor(n/2);
let ans=0
while(low<=high){
    let mid=Math.floor(low+(high-low)/2);
   // console.log(mid)
    if(mid*mid==n){
        ans=mid
        break;
    } else {
       mid= mid/2
    }
}
console.log(ans)
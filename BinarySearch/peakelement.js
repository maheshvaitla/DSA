let arr =[5,10,20,15];
let n=arr.length;


function ans(n,arr){
let low=0;
let high=n-1;
while(low<=high){
    let mid=Math.floor(low+(high-low)/2);
    if(mid>0 && mid<n-1){
        if(arr[mid]>arr[mid+1] && arr[mid]>arr[mid-1]){
            return arr[mid];

        } else if(arr[mid+1]>arr[mid]){
            low=mid+1
        } else {
            high=mid-1
        }
    } else if(mid==0){
        if(arr[0]>arr[1]){
            return arr[0]
        } else {
            return arr[1]
        }
    } else if(mid==n-1){
        if(arr[n-1]>arr[n-2]){
            return arr[n-1]
        } else {
            return arr[n-2]
        }
    }

}
}
console.log(ans(n,arr))
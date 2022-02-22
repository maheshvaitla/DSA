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
           return mid+1
       } if(arr[mid]<arr[mid-1]){
           return mid
       }
       if(arr[low]<=arr[mid]){
           low=mid+1
       } if(arr[mid]<=arr[high]){
           high=mid-1
       }
   }
}

function search(arr,low,high,key){
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        
        if(arr[mid]==key){
            return mid;
        } else if(arr[mid]>key){
            high=mid-1;
        } else if(arr[mid]<key){
            low=mid+1;
        }

}
}
let index =min(arr,n);

let x = search(arr,0,index-1,3);
let y = search(arr,index,n-1,3);
console.log(x >= 0 ? x : y);


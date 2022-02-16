
let arr =[22,1,6,5,3,9,7];
let n=arr.length;

function quicksort(arr,low,high){
    if(low<high){
        let mid =partition(arr,low,high)
        quicksort(arr,low,mid-1);
        quicksort(arr,mid+1,high)
    }
}
quicksort(arr,0,n-1);

function partition(arr,low,high){
    let x =arr[high];
    let i=low-1;
    for(let j=low;j<=high-1;j++){
        if(arr[j]<=x){
        i++;
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
   
        
    }
    let temp1=arr[i+1];
    arr[i+1]=arr[high]
    arr[high]=temp1;
    return i+1;

    
}


console.log(arr)
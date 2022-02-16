let arr =[11,1,3,2,7,4,9]
let n=arr.length

// Selection sort is we have to divide the array into tow halfes i.e sorted half and unsorted half
// select the min element and swap that min elemnet with first half and repeat so on

for(let i=0;i<n-1;i++){
    let min=i
    for(let j=i+1;j<n;j++){
        if(arr[j]<arr[min]){
            min=j
        }
    }
    let temp=arr[min];
    arr[min]=arr[i];
    arr[i]=temp
}
console.log(arr);

let arr =[22,1,6,5,3,9,7];

for(let i=0;i<arr.length;i++){
    let key=arr[i];
    let j=i-1;
    while(j>=0 && arr[j]>key){
        arr[j+1]=arr[j];
        j=j-1;
    }
    arr[j+1]=key;
}
console.log(arr);
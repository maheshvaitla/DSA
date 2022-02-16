let arr =[11,1,3,2,7,4,9]
let n=arr.length;

// merge sort is based on dicid and conquer algo
// so we divide the array and later we conquer


function mergesort(arr,l,h){
    if(l>=h){
        return; 
    }
    let mid =Math.floor(l+((h-l)/2));
    mergesort(arr,l,mid);
    mergesort(arr,mid+1,h);
    merge(arr,l,mid,h);
}
mergesort(arr,0,n-1)


function merge(arr,l,mid,h){
    let n1=mid-l+1;
    let n2=h-mid;

    let L=new Array(n1);
    let R=new Array(n2);
    

    for(let i=0;i<n1;i++){
        L[i]=arr[l+i];
    }

    for(let j=0;j<n2;j++){
        R[j]=arr[mid+1+j]
    }

    let i=0;
    let j=0;
    let k=l;
    while(i<n1 && j<n2){
        if(L[i]<=R[j]){
            arr[k]=L[i];
            i++
        } else {
            arr[k]=R[j];
            j++
        }
        k++
    }

    while(i<n1){
        arr[k]=L[i];
        i++;
        k++;
    }
    while (j<n2){
        arr[k]=R[j];
        j++;
        k++
    }
}
console.log(arr);
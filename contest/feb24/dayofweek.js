function dayOfTheWeek(day, N) {
    //write code here
    let arr=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    let save=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==day){
            save=i
        }
    }
    let ans=(save+N)%7
    console.log(arr[ans])
    
    
  }
  
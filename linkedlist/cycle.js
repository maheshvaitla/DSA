
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var hasCycle = function(head) {
    let slow=head;
    let fast=head;
    let flag="false"
    while(slow!=null && fast!=null && fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
        if(slow==fast){
            flag="true"
            break;
        }
    }
    return flag;
    
    
};


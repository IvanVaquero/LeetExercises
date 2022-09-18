var merge2Lists = function(listA, listB){
    
    if (listA == null){
        return listB;
    }
    
    if (listB == null){
        return listA;
    }
    
    var result  = null;
    var current = null;
    
    while(listA != null){
        var val = null
        if((listB == null) || (listA.val < listB.val)) {
          val = listA.val;
          listA = listA.next;
        } else {
          val = listB.val;
          listB = listB.next;
        }
        if(current == null){
            current = new ListNode(val);
            result = current;
        } else {
            current.next = new ListNode(val);
            current = current.next;
        }
    }
    current.next = listB;
    return result;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    switch(lists.length){
        case 0:
            return null;
        case 1:
            return lists[0];
        default:
            var result = lists[0];
            for(var i=1; i<lists.length; i++){
                result = merge2Lists(result, lists[i]);
            }
            return result;
    }
};
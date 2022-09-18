/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var n1 = l1;
    var n2 = l2;
    var carry = 0;
    while(true){
        if (n2 != null){
            n1.val += n2.val + carry;
            n2 = n2.next;
        }
        if (n1.val >= 10){
            n1.val -= 10;
            carry = 1;
        } else {
            carry = 0;
        }
        if (carry > 0){
            if(n1.next != null){
                n1.next.val += carry;
            } else {
                n1.next = {
                    val: carry,
                    next: null
                };
            }
            carry = 0;
        }
        if(n1.next != null){
            n1 = n1.next;
        } else {
            break;
        }
    }
    if(n2 != null){
        var n3 = n2;
        while (carry > 0){
            n3.val += carry;
            if (n3.val >= 10){
                n3.val -= 10;
                carry = 1;
            } else {
                carry = 0;
            }
            if(carry > 0 && n3.next == null){
                n3.next = {
                    val: carry,
                    next: null
                };
                carry = 0;
            }
            n3 = n3.next;
        }
        n1.next = n2;
    }
    return l1;
};
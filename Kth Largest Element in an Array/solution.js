/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return nums.sort((a,b) => a-b)[nums.length - k];
};

/**
let Node = function(left=null, right=null, parent=null, value=0, count=0){
    this.left = left;
    this.right = right;
    this.parent = parent;
    this.value = value;
    this.count = count;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}

var findKthLargest = function(nums, k) {
    let max = 0;
    let root = new Node();
    let nodeMap = {};
    nodeMap[0] = root;
    
    for(let i=0; i<nums.length; i++){
        max = Math.max(nums[i], max);
        if(nodeMap[nums[i]]){
            nodeMap[nums[i]].count++;
        } else {
            let currentNode = root;
            while(true){
                if(nums[i] > currentNode.value) {
                    if(currentNode.right == null){
                        let node = new Node(null, null, currentNode, nums[i], 1);
                        currentNode.right = node;
                        nodeMap[nums[i]] = node;
                        break;
                    } else {
                        currentNode = currentNode.right;
                    }
                } else {
                    if(currentNode.left == null){
                        let node = new Node(null, null, currentNode, nums[i], 1);
                        currentNode.left = node;
                        nodeMap[nums[i]] = node;
                        break;
                    } else {
                        currentNode = currentNode.left;
                    }
                }
            }
        }
    }
    
    let c = nodeMap[max].count;
    let node = nodeMap[max];
    let newNode = false;
    let processed = new Set();
    processed.add(node.value);
    
    while(c < k){
        let candidates = [node.right, node.left, node.parent];
        for(let i=0; i<candidates.length; i++){
            let potentialNode = candidates[i];
            if(potentialNode && !processed.has(potentialNode.value)){
                newNode = true;
                while(potentialNode.right && !processed.has(potentialNode.right.value)){
                    potentialNode = potentialNode.right;
                }
                previous = node;
                node = potentialNode;
                processed.add(node.value);
                break;
            }
        }
        if(newNode){
           c+= node.count;
           newNode = false;
        } else {
           node = node.parent;
        }
        
    }
    
    return node.value;
};
*/
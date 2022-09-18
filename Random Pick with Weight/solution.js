/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.sum = 0;
    this.weights = w;
    for(let i = 0; i<w.length; i++){
        this.sum += w[i];
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let index = Math.floor(Math.random() * this.sum);
    let current = 0;
    for(let i=0; i<this.weights.length; i++){
        current += this.weights[i];
        if(index < current){
            return i;
        }
    }
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
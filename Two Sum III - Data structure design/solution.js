
var TwoSum = function() {
    this.numbers = {};
    this.adds = 0;
};

/** 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    if(this.numbers[number]){
        this.numbers[number]++;
    } else {
        this.numbers[number] = 1;
    }
    this.adds++;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    if(this.adds <= 1){
        return false;
    }
    let keys = Object.keys(this.numbers);
    for(let i = 0; i< keys.length; i++){
        let number = parseInt(keys[i]);
        let count = parseInt(this.numbers[number]);
        if((value == (number+number)) && count > 1){
            return true;
        } else if((this.numbers[value-number]) && (value-number != number)){
            return true;
        }
    }
    return false;
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
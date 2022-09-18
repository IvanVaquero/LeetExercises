/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let available = 0;
    for(let i=0; i<flowerbed.length; i++){
        if(i == 0){
            if(flowerbed[i] == 0 && (flowerbed[i+1]==0 || !flowerbed[i+1])){
                available++;
                flowerbed[i] = 1;
            }
        } else if (i==flowerbed.length - 1) {
            if(flowerbed[i] == 0 && flowerbed[i-1] == 0) {
                available++;
                flowerbed[i] = 1;
            }
        } else {
            if(flowerbed[i] == 0 && flowerbed[i-1] == 0 && flowerbed[i+1] == 0){
                available++;
                flowerbed[i] = 1;
            }
        }
    }
    return available >= n;
};
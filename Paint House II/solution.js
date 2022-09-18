/**
 * @param {number[][]} costs
 * @return {number}
 */
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function(costs) {
    var processedCosts = {};
    
    var paintCost = function(houseNumber, color){
        let totalCost = costs[houseNumber][color];
        if(costs[houseNumber+1]){
            let minCost = 0;
            if(processedCosts[(houseNumber+1) +'/'+color] != undefined){
                minCost = processedCosts[(houseNumber+1)+'/'+color]
            } else {
                minCost = Number.MAX_VALUE;
                for(let i=0; i<costs[houseNumber+1].length; i++){
                    if(color != i){
                        minCost = Math.min(minCost, paintCost(houseNumber+1, i))
                    }
                }
            }
            processedCosts[(houseNumber+1)+'/'+color] = minCost;
            totalCost += minCost;
        }
        return totalCost;
    }
    if(costs.length > 0){
        minCost = Number.MAX_VALUE;
        for(let i=0; i<costs[0].length; i++){
            minCost = Math.min(minCost, paintCost(0, i));
        }
        return minCost;
    }
    return 0;
};
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    var processedCosts = {};
    var paintCost = function(houseNumber, color){
        let totalCost = costs[houseNumber][color];
        if(costs[houseNumber+1]){
            let childCost = 0;
            if(processedCosts[(houseNumber+1)+'/'+color] != undefined){
                childCost = processedCosts[(houseNumber+1)+'/'+color]
            } else {
                if(color ==0){
                  childCost = Math.min(paintCost(houseNumber+1, 1), paintCost(houseNumber+1, 2));  
                } else if(color == 1) {
                  childCost = Math.min(paintCost(houseNumber+1, 0), paintCost(houseNumber+1, 2)); 
                } else if(color == 2){
                  childCost = Math.min(paintCost(houseNumber+1, 0), paintCost(houseNumber+1, 1)); 
                }
            }
            processedCosts[(houseNumber+1)+'/'+color] = childCost;
            totalCost += childCost;
        }
        return totalCost;
    }
    if(costs.length > 0){
        return Math.min(paintCost(0,0),paintCost(0,1), paintCost(0,2))
    }
    return 0;
};
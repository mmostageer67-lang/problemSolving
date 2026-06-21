var closestCost = function(baseCosts, toppingCosts, target) {
    let closest = Infinity;

    const isBetter = (cost) => {
        const diff = Math.abs(cost - target);
        const bestDiff = Math.abs(closest - target);
        return diff < bestDiff || (diff === bestDiff && cost < closest);
    };

    const dfs = (i, currentCost) => {
        if (isBetter(currentCost)) closest = currentCost;
        if (i === toppingCosts.length || currentCost > target) return;

        for (let count = 0; count <= 2; count++) {
            dfs(i + 1, currentCost + count * toppingCosts[i]);
        }
    };

    for (const base of baseCosts) {
        dfs(0, base);
    }

    return closest;
};
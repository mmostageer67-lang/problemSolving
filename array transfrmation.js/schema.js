/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function(n, minProfit, group, profit) {
    const MOD = 1000000007;

    
    const dp = Array.from(
        { length: n + 1 },
        () => Array(minProfit + 1).fill(0)
    );

    dp[0][0] = 1;

    for (let i = 0; i < group.length; i++) {
        const members = group[i];
        const gain = profit[i];

        for (let m = n; m >= members; m--) {

            for (let p = 0; p <= minProfit; p++) {

                const newProfit = Math.min(
                    minProfit,
                    p + gain
                );

                dp[m][newProfit] =
                    (dp[m][newProfit] + dp[m - members][p]) % MOD;
            }
        }
    }

    let answer = 0;

    for (let m = 0; m <= n; m++) {
        answer = (answer + dp[m][minProfit]) % MOD;
    }

    return answer;
};
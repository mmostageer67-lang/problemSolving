/*
                                             first: understand problem
                                             =========================
1. Maximize Value of Function in a Ball Passing Game = find maximum score in a ball passing game
2.wehave  resive is intger array of length n 
3.and k is an integer it's total number of passes in the game  
4. n is number of players in the game 
5.i it's the player how start
6.player i pass the ball to player resive[i] and he pass ball to player resive[resive[i]] 
7.sum all players how tuch the ball an how repeat player how touch the ball
8.return the maximum score of any player after k passes
*/
var getMaxFunctionValue = function(receiver, k) {
    const n = receiver.length;
    const LOG = 35;

    const up = Array.from({ length: LOG }, () => Array(n));

    const sum = Array.from({ length: LOG }, () => Array(n));

    for (let i = 0; i < n; i++) {
        up[0][i] = receiver[i];
        sum[0][i] = receiver[i];
    }

    for (let j = 1; j < LOG; j++) {
        for (let i = 0; i < n; i++) {
            const mid = up[j - 1][i];

            up[j][i] = up[j - 1][mid];

            sum[j][i] =
                sum[j - 1][i] +
                sum[j - 1][mid];
        }
    }

    let answer = 0;

    for (let start = 0; start < n; start++) {
        let current = start;
        let score = start;
        let passes = k;

        for (let j = 0; j < LOG; j++) {

            if (passes % 2 === 1) {
                score += sum[j][current];
                current = up[j][current];
            }

            passes = Math.floor(passes / 2);
        }

        answer = Math.max(answer, score);
    }

    return answer;
};
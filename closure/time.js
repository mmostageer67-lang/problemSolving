var countTime = function(time) {
    let answer = 0

    for(let i = 0; i <= 23; i++) {
        for(let y = 0; y <= 59; y++) {

            let hour      = String(i).padStart(2, "0")
            let minute    = String(y).padStart(2, "0")
            let candidate = hour + ":" + minute

            let match = true
            for(let k = 0; k < time.length; k++) {
                if(time[k] !== "?" && time[k] !== candidate[k]) {
                    match = false
                    break
                }
            }

            if(match) answer++
        }
    }

    return answer
};
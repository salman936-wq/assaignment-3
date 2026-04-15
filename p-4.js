function gonoVote(array) {

    if (!Array.isArray(array)) {
        return "Invalid";
    }

    let haCount = 0;
    let naCount = 0;

    for (let vote of array) {
        if (typeof vote !== "string") {
            return "Invalid";
        }
        if (vote === "ha") {
            haCount++
        }
        else if (vote === "na") {
            naCount++
        }
    }
    
    if (haCount > naCount) {
        return true;
    }
    else if (naCount > haCount) {
        return false;
    }
    else if (haCount === naCount) {
        return "equal";
    }
}

// const votes = ["ha, na"];
// const result = gonoVote(votes);
// console.log(result);

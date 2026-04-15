// fct te text jacche kina check koro
// let spliter text use kore text split kor " "
// split = try koro for loop with i++
// "i" er vitore shobchye boro word konta ber koro
// shobchye boro word push koro object.longwords ke

// str er shob space remove kore
// count koro withoutSpace.length str ke
// push koro total token

function analyzeText(str) {

    if (typeof str !== "string") {
        return "Invalid";
    }
    else if (str.trim().length === 0) {
        return "Invalid";
    }

    let push = {
        longwords: "",
        token: 0
    }

    // Big text find
    let spliterText = str.split(" ")
    
    for (let i = 0; i < spliterText.length; i++) {
        push.token = push.token + spliterText[i].length;
        if (spliterText[i].length > push.longwords.length) {
            push.longwords = spliterText[i];
        }
    }
    // Big Text Find

    return push;
}

// let text = "         ";
// let final = analyzeText(text);
// console.log(final);






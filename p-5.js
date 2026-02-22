function analyzeText(str) {
       if(typeof str !=="string"){
          return 'Invalid';

        }

    let words =str.split(" ");
    let total_token=str.replace(/\s/g,'').length;
    let long_words='';

    for(let word of words){
       
       if(word.length>long_words.length){
        long_words=word;
      
    } 
    }
    return{
        longword: long_words,
        token : total_token
          };
}

// const text =analyzeText("Keep coding keep shining" );
// console.log("total:",text);
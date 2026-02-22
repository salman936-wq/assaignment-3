
function finalScore (omr) {
      let  { right, wrong, skip }=omr;
         let total=0;
         
       if( right+wrong+skip ===100 ){
           total= total+(right*1+wrong*-0.5+skip*0);
           total= Math.round(total);
           return total;
       }
       else{
        return "Invalid";
       }


}


// const fine= finalScore({ right: 67, wrong: 23, skip: 10 });
// console.log(fine)

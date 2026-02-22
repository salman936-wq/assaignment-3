
function newPrice(currentPrice , discount ) {
        // console.log(currentPrice , discount );
         
       
        if(typeof currentPrice ==='number'&& typeof discount ==='number'&& !isNaN(currentPrice)&& !isNaN(discount) && discount>0 && discount<100){
            let price_after_discount=currentPrice-(currentPrice*discount/100);

   
            return price_after_discount.toFixed(3);

        }
        else{
            return "Invalid";
        }
    


}


// const fine =newPrice(1000,710);
// console.log(fine);

function validOtp(otp) {
    //  console.log(otp);

      if(typeof otp!=="string"){
        return 'Invalid'
     }     
     if(typeof otp==="string"&& otp.length ===8 && otp.startsWith("ph-")){
       return true;
     }
    
     else{
        return false;
     }
}



// const right=validOtp(["ph-10985"]  );
// console.log("your otp:",right);
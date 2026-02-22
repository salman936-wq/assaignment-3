function gonoVote(array) {
     let ha=0;
     let na=0;

     if(!Array.isArray(array)){
        return 'Invalid';
       }
      for(let arra of array){
         if(arra==='ha'){
          ha++;
         }
         else if(arra==="na"){
            na++;
         }
       
      }

      if(ha>na){
        return 'true';
      }
      else if(ha<na){
        return 'false';
      }
      else if(ha===na){
        return 'equal';
      }


}




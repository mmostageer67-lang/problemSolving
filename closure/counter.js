var createCounter = function(init) {
  let value=init
    return{
        increment:()=>
        {
       
 return ++value
        },

 reset:()=>
        {
           value= init
           return value
         
        }
         ,
       decrement:()=>
        {
            return --value
           
        }
      
    }
};
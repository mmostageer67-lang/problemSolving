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
//====================
var createCounter = function(init) {
  let value=init
  return Object.freeze({
  increment: () => ++value,
  decrement: () => --value,
  reset: () => (value = init)
})
};

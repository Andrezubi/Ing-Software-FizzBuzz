function convertirFizzBuzz(x){
    if(x%3===0){
        
        if(x%5===0){
            return 'FizzBuzz'
        }
        else{
            return 'Fizz';
        }
    }
    else{
        if(x%5===0){
            return 'Buzz';

        }
        else{
        return ''+x;
        }
    }
    
}
export {convertirFizzBuzz};
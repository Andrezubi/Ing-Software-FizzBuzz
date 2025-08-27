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


function FizzBuzz(n){
    var res='';
    for (let i =1; i <=n; i++){
       res=res+convertirFizzBuzz(i);
       if(i!=n){
        res=res+', '
       }
    }
    return res;
}

export {convertirFizzBuzz,FizzBuzz};
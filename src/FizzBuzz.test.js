import { convertirFizzBuzz,FizzBuzz } from "./FizzBuzz";    
    
    
    describe("FizzBuzz", () => {
  it("debe devolver un numero no multiplo de 3 o 5 como caracter", () => {
    expect(convertirFizzBuzz(1)).toEqual('1');
  });
  it("debe devolver un numero cualquiera no multiplo de 3 o 5 como caracter", () => {
    expect(convertirFizzBuzz(7)).toEqual('7');
  });
  
  it("debe devolver Fizz a un numero multiplo de 3", () => {
    expect(convertirFizzBuzz(6)).toEqual('Fizz');
  });
  it("debe devolver Fizz a cualquier numero multiplo de 3", () => {
    expect(convertirFizzBuzz(9)).toEqual('Fizz');
  });

  
  it("debe devolver Buzz a un numero multiplo de 5", () => {
    expect(convertirFizzBuzz(5)).toEqual('Buzz');
  });
  it("debe devolver Buzz a cualquier numero multiplo de 5", () => {
    expect(convertirFizzBuzz(10)).toEqual('Buzz');
  });

  it("debe devolver FizzBuzz a un numero multiplo de 3 y 5", () => {
    expect(convertirFizzBuzz(15)).toEqual('FizzBuzz');
  });
    it("debe devolver FizzBuzz a cualquier numero multiplo de 3 y 5", () => {
    expect(convertirFizzBuzz(30)).toEqual('FizzBuzz');
  });

  it("debe devolver la cadena de numeros y fizzbuzz", () => {
    expect(FizzBuzz(10)).toEqual('1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz');
  });
  it("debe devolver una cadena cualquiera  de numeros y fizzbuzz", () => {
    expect(FizzBuzz(15)).toEqual('1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz');
  });
});
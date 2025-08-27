import { convertirFizzBuzz } from "./FizzBuzz";    
    
    
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
  it("debe devolver Buzz a caulquier numero multiplo de 5", () => {
    expect(convertirFizzBuzz(10)).toEqual('Buzz');
  });

});
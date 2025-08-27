import { convertirFizzBuzz } from "./FizzBuzz";    
    
    
    describe("FizzBuzz", () => {
  it("debe devolver un numero no multiplo de 3 o 5 como cadena", () => {
    expect(convertirFizzBuzz(1)).toEqual('1');
  });
  it("debe devolver un numero cualquiera no multiplo de 3 o 5 como cadena", () => {
    expect(convertirFizzBuzz(7)).toEqual('7');
  });
});
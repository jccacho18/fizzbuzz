describe("Test fizzBuzz", function() {
 
    
    beforeEach(function() {
        fizzBuzz = new fizzBuzz();
    });
    
    describe("Return number, fizz, buzz, fizzBuzz", function() {
        it("should exist", function() {
            expect(fizzBuzz).toBeDefined();
        });
        
        it("should return fizz when called as fizzBuzz(9)", function() {
            var result = fizzBuzz(9)
            expect(result).toBe("fizz");
        });
                
        it("should return buzz when called as fizzBuzz(10)", function() {
            var result = fizzBuzz(10)
            expect(result).toBe("buzz");
        });
        
        it("should return fizzBuzz when called as fizzBuzz(15)", function() {
            var result = fizzBuzz(15)
            expect(result).toBe("fizzBuzz");
        });
        
        it("should return 2 when called as fizzBuzz(2)", function() {
            var result = fizzBuzz(2)
            expect(result).toBe(2);
        });
    });
});
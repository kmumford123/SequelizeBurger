var expect = require("chai").expect;

// function xo(input) {
function xo(str) {
    var x = str.toLowerCase.match(/x/gi);
    var y = str.toLowerCase.match(/o/gi);

    return x.length === y.length;

}

// }

describe("XO Tets", function() {
    it("should return true for the input 'xo' ", function() {
        expect(xo('xo')).to.equal(true)
    });
});
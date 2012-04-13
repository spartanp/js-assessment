define([ 'use!underscore' ], function(_) {
  describe("arrays", function() {
    var a, b, fn;

    beforeEach(function() {
      a = [ 1, 2, 3, 4 ];
      b = {
        foo : 'bar',
        baz : 'bim'
      };

      fn = function() { };
    });

    it("you should be able to determine the location of an item in an array", function() {
      fn = function(ar, el) {
        for (var i = 0, l = ar.length; i < l; i++) {
          if (el === ar[i]) {
            return i;
          }
        }
        return -1; 
      }
      // define a function for fn so that the following will pass
      expect(fn(a, 3)).to.be(2);
    });

    it("you should be able to add the values of an array", function() {
      fn = function(ar) {
        var sum = 0;
        for (var i = 0, l = ar.length; i < l; i++) {
          sum += ar[i];
        }
        return sum;
      }
      // define a function for fn so that the following will pass
      expect(fn(a)).to.be(10);
    });

    it("you should be able to remove an item from an array", function() {
      fn = function(ar, el) {
         for (var i = 0, l = ar.length; i < l; i++) {
            if (el === ar[i]) {
              ar.splice(i, 1);
              return ar;
            }
          }
      }
      // define a function for fn so that the following will pass
      var result = fn(a, 2);
      expect(result).to.have.length(3);
      expect(result.join(' ')).to.be('1 3 4');
    });

    it("you should be able to add an item to the end of an array", function() {
      fn = function(ar, el) {
        ar.push(el);
        return ar;
      }
      // define a function for fn so that the following will pass
      var result = fn(a, 10);
      expect(result).to.have.length(5);
      expect(result[result.length - 1]).to.be(10);
    });

    it("you should be able to create an array from two arrays", function() {
      fn = function(arr1, arr2) {
        for (var i = 0, l = arr2.length; i < l; i++) {
          arr1.push(arr2[i]);
        }
        return arr1;
      }
      // define a function for fn so that the following will pass
      var c = [ 'a', 'b', 'c' ],
          result = fn(a, c);

      expect(result).to.have.length(7);
      expect(result.join(' ')).to.be('1 2 3 4 a b c');
    });

    it("you should be able to add an item anywhere in an array", function() {
      fn = function(ar, el, position) {
        ar.splice(position, 0, el);
        return ar;
      }
      // define a function for fn so that the following will pass
      var result = fn(a, 'z', 2);

      expect(result).to.have.length(5);
      expect(result.join(' ')).to.be('1 2 z 3 4');
    });
  });
});

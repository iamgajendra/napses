// Haskell 99 problem 6

const chai = require("chai");
const expect = chai.expect;

describe.only("check whether a list is a palindrome", () => {
  context("when no parameter is passed", () => {
    it("should return nothing", () => {
      let result = checkPalindrome();
      expect(result).to.be.undefined;
    });
  });
  context("when empty list is passed", () => {
    it("should return true", () => {
      let result = checkPalindrome([]);
      expect(result).to.be.true;
    });
  });
  context("when empty string is passed", () => {
    it("should return true", () => {
      let result = checkPalindrome("");
      expect(result).to.be.true;
    });
  });
  context("when list is a not plindrome", () => {
    it("should return false", () => {
      let result = checkPalindrome(['a','b','c']);
      expect(result).to.be.false;
    });
  });
  context("when string is a not plindrome", () => {
    it("should return false", () => {
      let result = checkPalindrome('abc');
      expect(result).to.be.false;
    });
  });
  context("when list is plindrome", () => {
    it("should return false", () => {
      let result = checkPalindrome(['a','b','a']);
      expect(result).to.be.true;
    });
  });
  context("when string is plindrome", () => {
    it("should return false", () => {
      let result = checkPalindrome('aba');
      expect(result).to.be.true;
    });
  });
});

const checkPalindrome = (list) => {
  if (list !== undefined) {
    if (Array.isArray(list)) {
      return JSON.stringify(list) === JSON.stringify(list.reverse());
    } else if (typeof list === "string") {
      return list === list.split('').reverse().join('');  
    }
  }
};

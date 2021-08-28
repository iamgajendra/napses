// Haskell 99 problem 5

const chai = require("chai");
const expect = chai.expect;

describe.only("get the reversed list", () => {
  context("when no parameter is passed", () => {
    it("should return nothing", () => {
      let result = getReversedList();
      expect(result).to.be.undefined;
    });
  });
  context("when empty list is passed", () => {
    it("should return empty list", () => {
      let result = getReversedList([]);
      expect(result).to.be.eql([]);
    });
  });
  context("when empty string is passed", () => {
    it("should return empty string", () => {
      let result = getReversedList("");
      expect(result).to.be.eql("");
    });
  });
  context("when list contain one item", () => {
    it("should return same list", () => {
      let result = getReversedList(["a"]);
      expect(result).to.be.eql(["a"]);
    });
  });
  context("when length of string is one", () => {
    it("should return same string", () => {
      let result = getReversedList("a");
      expect(result).to.be.eql("a");
    });
  });
  context("when list contain more than one item", () => {
    it("should return reversed list", () => {
      let result = getReversedList(["a", "b", "c"]);
      expect(result).to.be.eql(["c", "b", "a"]);
    });
  });
  context("when length of string is more than one", () => {
    it("should return reversed list", () => {
      let result = getReversedList("abc");
      expect(result).to.be.eql("cba");
    });
  });
});

const getReversedList = (list) => {
  if (list !== undefined) {
      if(Array.isArray(list)){
        return list.reverse();
      }
      else if(typeof list === 'string') {
          return list.split('').reverse().join('');
      }
  }
};

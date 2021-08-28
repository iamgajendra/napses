// Haskell 99 problem 8

const chai = require("chai");
const expect = chai.expect;

describe.only("Eliminate consecutive duplicates of list elements", () => {
  context("when no parameter is passed", () => {
    it("should return nothing", () => {
      let result = getListWithoutDuplicate();
      expect(result).to.be.undefined;
    });
  });
  context("when empty list is passed", () => {
    it("should return same list", () => {
      let result = getListWithoutDuplicate([]);
      expect(result).to.be.eql([]);
    });
  });
  context("when there is no consecutive duplicate items", () => {
    it("should return same list", () => {
      let result = getListWithoutDuplicate([3,1, 2, 3]);
      expect(result).to.be.eql([3,1, 2, 3]);
    });
  });
  context("when there are consecutive duplicate items", () => {
    it("should return list without consecutive duplicate items", () => {
      let result = getListWithoutDuplicate([1,1, 2, 3,3]);
      expect(result).to.be.eql([1, 2, 3]);
    });
  });
});

const getListWithoutDuplicate = (list) => {
  if (list !== undefined) {
    return list.filter(function (item, pos, arr) {
      return pos === 0 || item !== arr[pos - 1];
    });
  }
};

// Haskell 99 problem 1


const chai = require("chai");
const expect = chai.expect;
// const { verifyResultOk, verifyResultError } = require('helpers/verifiers');

describe.only("find last element in a list", () => {
  context("when the list is empty", () => {
    it("should return nothing", () => {
      let result = findLastElement([]);
      expect(result).to.be.undefined;
    });
  });

  context('when the list contains one element', () => {
      it('should return the first element', () => {
          let result = findLastElement([100]);
          expect(result).to.be.eql(100);
      });
  });

  context('when the list contains many element', () => {
    it('should return the last element', () => {
        let result = findLastElement([100,101]);
        expect(result).to.be.eql(101);
    });
});
});

const findLastElement = (list) => { return list[list.length-1] };

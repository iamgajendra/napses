// Haskell 99 problem 10

const chai = require("chai");
const expect = chai.expect;

describe.only("Run-length encoding of a list", () => {
  context("when no parameter is passed", () => {
    it("should return nothing", () => {
      let result = addSublistForDuplicate();
      expect(result).to.be.undefined;
    });
  });
  context("when empty list is passed", () => {
    it("should return same list", () => {
      let result = addSublistForDuplicate([]);
      expect(result).to.be.eql([]);
    });
  });
  context("when there is no consecutive duplicate items", () => {
    it("should return same list", () => {
      let result = addSublistForDuplicate([3, 1, 2, 3]);
      expect(result).to.be.eql([
        [1, 3],
        [1, 1],
        [1, 2],
        [1, 3],
      ]);
    });
  });
  context("when there are consecutive duplicate items", () => {
    it("should return list with sublist of consecutive duplicate items", () => {
      let result = addSublistForDuplicate([1, 1, 2, 3, 3]);
      expect(result).to.be.eql([
        [2, 1],
        [1, 2],
        [2, 3],
      ]);
    });
  });
  context("when there are consecutive duplicate strings", () => {
    it("should return list with concat consecutive duplicate string", () => {
      let result = addSublistForDuplicate(["a", "a", "b", "c", "c"]);
      expect(result).to.be.eql([
        [2, "a"],
        [1, "b"],
        [2, "c"],
      ]);
    });
  });
});

const addSublistForDuplicate = (list) => {
  if (list !== undefined) {
    if (list.length === 0) return list;

    const result = [];
    let count = 1;
    let curr = list[0];
    for (let i = 1; i < list.length; ++i) {
      if (list[i] === list[i - 1]) {
        count++;
      } else {
        result.push([count,curr]);
        curr = list[i];
        count = 1;
      }
    }
    result.push([count,curr]);

    return result;
  }
};

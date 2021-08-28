// Haskell 99 problem 9

const chai = require("chai");
const expect = chai.expect;

describe.only("Pack consecutive duplicates of list elements into sublists", () => {
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
      expect(result).to.be.eql([3, 1, 2, 3]);
    });
  });
  context("when there are consecutive duplicate items", () => {
    it("should return list with sublist of consecutive duplicate items", () => {
      let result = addSublistForDuplicate([1, 1, 2, 3, 3]);
      expect(result).to.be.eql([[1, 1], 2, [3, 3]]);
    });
  });
  context("when there are consecutive duplicate strings", () => {
    it("should return list with concat consecutive duplicate string", () => {
      let result = addSublistForDuplicate(["a", "a", "b", "c", "c"]);
      expect(result).to.be.eql(["aa", "b", "cc"]);
    });
  });
});

const addSublistForDuplicate = (list) => {
  if (list !== undefined) {
    if (list.length === 0) return list;

    const result = [];
    let count = 1;
    let curr = list[0];
    let temp = [curr];
    let tempString = curr;
    for (let i = 1; i < list.length; ++i) {
      if (list[i] === list[i - 1]) {
        count++;
        if (typeof curr === "string") {
            tempString = tempString.concat(curr);
        } else {
          temp.push(curr);
        }
      } else {
        if (count === 1) {
          result.push(curr);
        } else {
          if (typeof curr === "string") {
            result.push(tempString);
          } else {
            result.push(temp);
          }
        }
        curr = list[i];
        count = 1;
        temp = [curr];
        tempString = curr;
      }
    }
    if (count === 1) {
      result.push(curr);
    } else {
      if (typeof curr === "string") {
        result.push(tempString);
      } else {
        result.push(temp);
      }
    }

    return result;
  }
};

// Haskell 99 problem 4


const chai = require("chai");
const expect = chai.expect;

describe.only('get number of element in a list', () => {
    context('when no parameter is passed', () => {
        it('should return nothing',() => {
            let result = findNoOfElements();
            expect(result).to.be.undefined;
        })
    })
    context('when empty list is passed', () => {
        it('should return 0',() => {
            let result = findNoOfElements([]);
            expect(result).to.be.eql(0);
        })
    })
    context('when list with items is passed', () => {
        it('should return the length of list',() => {
            let result = findNoOfElements([21,22]);
            expect(result).to.be.eql(2);
        })
    })
    context('when empty string is passed', () => {
        it('should return 0',() => {
            let result = findNoOfElements("");
            expect(result).to.be.eql(0);
        })
    })
    context('when valid string is passed', () => {
        it('should return th length of the string',() => {
            let result = findNoOfElements("afd");
            expect(result).to.be.eql(3);
        })
    })
});

const findNoOfElements = (list) => {
    return list!==undefined ? list.length : undefined;
}
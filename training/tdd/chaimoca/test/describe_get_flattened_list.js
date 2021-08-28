// Haskell 99 problem 7

const chai = require("chai");
const expect = chai.expect;

describe.only('get flattened list from a nested list structure', () => {
    context('when no paramenter is passed', () => {
        it('should return nothing', () => {
            let result = getFlattenedList();
            expect(result).to.be.undefined;
        })
    })
    context('when empty list is passed', () => {
        it('should return same list', () => {
            let result = getFlattenedList([]);
            expect(result).to.be.eql([]);
        })
    })
    context('when valid 1-D list is passed', () => {
        it('should return same list', () => {
            let result = getFlattenedList([1,2,3]);
            expect(result).to.be.eql([1,2,3]);
        })
    })
    context('when valid n-D list is passed', () => {
        it('should return same list', () => {
            let result = getFlattenedList([1,[[[4]]],2,3]);
            expect(result).to.be.eql([1,4,2,3]);
        })
    })
})

const getFlattenedList = (list) => {
    if(list !== undefined)
    {
        return list.flat(Infinity);
    }
}
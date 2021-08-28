// Haskell 99 problem 2


const chai = require("chai");
const expect = chai.expect;

describe.only('get last but one element in a list', () => {
    context('when the list is empty', () => {
        it('should return nothing', () => {
            let result =  findLastButOne([]);
            expect(result).to.be.undefined;
        });
    });
    context('when the list contains one element', () => {
        it('should return nothing', () => {
            let result =  findLastButOne([1]);
            expect(result).to.be.undefined;
        });
    });
    context('when the list contains two element', () => {
        it('should return first element', () => {
            let result =  findLastButOne([1,2]);
            expect(result).to.be.eql(1);
        });
    });
    context('when the list contains more than two element', () => {
        it('should return first element', () => {
            let result =  findLastButOne([1,2,3]);
            expect(result).to.be.eql(2);
        });
    });
});

const findLastButOne = (list) => {
    return list[list.length-2];
}
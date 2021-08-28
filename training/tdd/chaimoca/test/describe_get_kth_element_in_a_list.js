// Haskell 99 problem 3


const chai = require("chai");
const expect = chai.expect;

describe.only('get kth element in a list', () => {
    context('when no parameter is passed', () => {
        it('should return nothing', () => {
            let result =  findKthElement();
            expect(result).to.be.undefined;
        });
    })
    context('when list parameter is not passed', () => {
        it('should return nothing', () => {
            let result =  findKthElement(1);
            expect(result).to.be.undefined;
        });
    })
    context('when k parameter is not passed', () => {
        it('should return nothing', () => {
            let result =  findKthElement([1]);
            expect(result).to.be.undefined;
        });
    })
    context('when k is less than 1', () => {
        it('should return nothing', () => {
            let result =  findKthElement([1],0);
            expect(result).to.be.undefined;
        });
    })
    context('when k is greater than length of list', () => {
        it('should return nothing', () => {
            let result =  findKthElement([1],2);
            expect(result).to.be.undefined;
        });
    })
    context('when list is empty', () => {
        it('should return nothing', () => {
            let result =  findKthElement([],1);
            expect(result).to.be.undefined;
        });
    })
    context('when list is not empty and k is greater than 0 and less then equal to the length', () => {
        it('should return kth element', () => {
            let result =  findKthElement([1,2,3],3);
            expect(result).to.be.eql(3);
        });
    })
});

const findKthElement = (list = [],k) => {
    return list[k-1];
}
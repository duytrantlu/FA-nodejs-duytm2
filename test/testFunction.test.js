import { uniteUnique, booWho } from '../app';

describe('Test function uniteUnique',()=>{
    it('should return',()=>{
        expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual([1, 3, 2, 5, 4]);
    });
    it('should return',()=>{
        expect(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])).toEqual([1, 3, 2, [5], [4]]);
    });
    it('should return',()=>{
        expect(uniteUnique([1, 2, 3], [5, 2, 1])).toEqual([1, 2, 3, 5]);
    });
    it('should return',()=>{
        expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).toEqual([1, 2, 3, 5, 4, 6, 7, 8]);
    });
})

describe('Boo who',()=>{
    it('should return',()=>{
        expect(booWho(true)).toEqual(true);
    });
    it('should return',()=>{
        expect(booWho([1, 2, 3])).toEqual(false);
    });
    it('should return',()=>{
        expect(booWho([].slice)).toEqual(false);
    });
    it('should return',()=>{
        expect(booWho({ "a": 1 })).toEqual(false);
    });
    it('should return',()=>{
        expect(booWho(NaN)).toEqual(false);
    });
    it('should return',()=>{
        expect(booWho(1)).toEqual(false);
    });
    it('should return',()=>{
        expect(booWho("a")).toEqual(false);
    });
    it('should return',()=>{
        expect(booWho("true")).toEqual(false);
    });
    it('should return',()=>{
        expect(booWho("false")).toEqual(false);
    });
});
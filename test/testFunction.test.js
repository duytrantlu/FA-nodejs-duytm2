/* eslint no-undef:0 */
import {
  uniteUnique,
  booWho,
  convertHTML,
  spinalCase,
  numFibs as sumFibs,
  sumPrimes,
  findElement,
  smallestCommons,
  dropElements,
  steamrollArray,
} from '../app';

describe('Test function uniteUnique', () => {
  it('should return', () => {
    expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual([
      1,
      3,
      2,
      5,
      4,
    ]);
  });
  it('should return', () => {
    expect(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])).toEqual([
      1,
      3,
      2,
      [5],
      [4],
    ]);
  });
  it('should return', () => {
    expect(uniteUnique([1, 2, 3], [5, 2, 1])).toEqual([1, 2, 3, 5]);
  });
  it('should return', () => {
    expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).toEqual([
      1,
      2,
      3,
      5,
      4,
      6,
      7,
      8,
    ]);
  });
});

describe('Boo who', () => {
  it('should return', () => {
    expect(booWho(true)).toEqual(true);
  });
  it('should return', () => {
    expect(booWho([1, 2, 3])).toEqual(false);
  });
  it('should return', () => {
    expect(booWho([].slice)).toEqual(false);
  });
  it('should return', () => {
    expect(booWho({ a: 1 })).toEqual(false);
  });
  it('should return', () => {
    expect(booWho(NaN)).toEqual(false);
  });
  it('should return', () => {
    expect(booWho(1)).toEqual(false);
  });
  it('should return', () => {
    expect(booWho('a')).toEqual(false);
  });
  it('should return', () => {
    expect(booWho('true')).toEqual(false);
  });
  it('should return', () => {
    expect(booWho('false')).toEqual(false);
  });
});

describe('Test function converHTML', () => {
  it('should return', () => {
    expect(convertHTML('Dolce & Gabbana')).toEqual('Dolce &amp; Gabbana');
  });
  it('should return', () => {
    expect(convertHTML('Hamburgers < Pizza < Tacos')).toEqual('Hamburgers &lt; Pizza &lt; Tacos');
  });
  it('should return', () => {
    expect(convertHTML('Sixty > twelve')).toEqual('Sixty &gt; twelve');
  });
  it('should return', () => {
    expect(convertHTML('Stuff in "quotation marks"')).toEqual('Stuff in &quot;quotation marks&quot;');
  });

  it('should return', () => {
    expect(convertHTML("Shindler's List")).toEqual('Shindler&apos;s List');
  });
  it('should return', () => {
    expect(convertHTML('<>')).toEqual('&lt;&gt;');
  });
  it('should return', () => {
    expect(convertHTML('abc')).toEqual('abc');
  });
});
describe('Test function SpinalCase', () => {
  it('should return', () => {
    expect(spinalCase('This Is Spinal Tap')).toEqual('this-is-spinal-tap');
  });
  it('should return', () => {
    expect(spinalCase('thisIsSpinalTap')).toEqual('this-is-spinal-tap');
  });
  it('should return', () => {
    expect(spinalCase('The_Andy_Griffith_Show')).toEqual('the-andy-griffith-show');
  });
  it('should return', () => {
    expect(spinalCase('Teletubbies say Eh-oh')).toEqual('teletubbies-say-eh-oh');
  });
  it('should return', () => {
    expect(spinalCase('AllThe-small Things')).toEqual('all-the-small-things');
  });
});

describe('Test function Sum all odd Fibonacci number', () => {
  it('should return', () => {
    expect(typeof sumFibs(1)).toEqual('number');
  });
  it('shoudl return', () => {
    expect(sumFibs(1000)).toEqual(1785);
  });
  it('shoudl return', () => {
    expect(sumFibs(4000000)).toEqual(4613732);
  });
  it('shoudl return', () => {
    expect(sumFibs(4)).toEqual(5);
  });
  it('should return', () => {
    expect(sumFibs(75024)).toEqual(60696);
  });
  it('shoudl return', () => {
    expect(sumFibs(75025)).toEqual(135721);
  });
});
describe('Test function Sum All Primes', () => {
  it('should return', () => {
    expect(typeof sumPrimes(10)).toEqual('number');
  });
  it('should return', () => {
    expect(sumPrimes(10)).toEqual(17);
  });
  it('should return', () => {
    expect(sumPrimes(977)).toEqual(73156);
  });
});
describe('Test function findElement', () => {
  it('should return', () => {
    expect(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0)).toEqual(8);
  });
  it('should return', () => {
    expect(findElement([1, 3, 5, 9], num => num % 2 === 0)).toEqual(undefined);
  });
});
describe('test function smallestCommons', () => {
  it('should return', () => {
    expect(typeof smallestCommons([1, 5])).toEqual('number');
  });
  it('should return', () => {
    expect(smallestCommons([1, 5])).toEqual(60);
  });
  it('should return', () => {
    expect(smallestCommons([5, 1])).toEqual(60);
  });
  it('should return', () => {
    expect(smallestCommons([1, 13])).toEqual(360360);
  });
  it('should return', () => {
    expect(smallestCommons([23, 18])).toEqual(6056820);
  });
});
describe('Test function dropElements', () => {
  it('should return', () => {
    expect(dropElements([1, 2, 3, 4], n => n >= 3)).toEqual([3, 4]);
  });
  it('should return', () => {
    expect(dropElements([0, 1, 0, 1], n => n === 1)).toEqual([1, 0, 1]);
  });
  it('should return', () => {
    expect(dropElements([1, 2, 3], n => n > 0)).toEqual([1, 2, 3]);
  });
  it('should return', () => {
    expect(dropElements([1, 2, 3, 4], n => n > 5)).toEqual([]);
  });
  it('should return', () => {
    expect(dropElements([1, 2, 3, 7, 4], n => n > 3)).toEqual([7, 4]);
  });
  it('should return', () => {
    expect(dropElements([1, 2, 3, 9, 2], n => n > 2)).toEqual([3, 9, 2]);
  });
});
describe('Test function steamrollArray', () => {
  it('shoudl return', () => {
    expect(steamrollArray([[['a']], [['b']]])).toEqual(['a', 'b']);
  });
  it('should return', () => {
    expect(steamrollArray([1, [2], [3, [[4]]]])).toEqual([1, 2, 3, 4]);
  });
  it('should return', () => {
    expect(steamrollArray([1, [], [3, [[4]]]])).toEqual([1, 3, 4]);
  });
  it('shoudl return', () => {
    expect(steamrollArray([1, {}, [3, [[4]]]])).toEqual([1, {}, 3, 4]);
  });
});

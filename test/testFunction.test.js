/* eslint no-undef:0 */
import { uniteUnique, booWho, convertHTML, spinalCase } from '../app';

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

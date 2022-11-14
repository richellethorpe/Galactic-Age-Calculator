import Age from  './../src/js/ageCalc.js';

describe (`Age`, () => {
  test(`should correctly create an age object that contains 5 ages`, () => {
    const ages =new Age(4,2,5,7,4);
    expect(ages.mercuryYrs).toEqual(4);
    expect(ages.venusYrs).toEqual(2);
    expect(ages.marsYrs).toEqual(5);
    expect(ages.jupiterYrs).toEqual(7);
    expect(ages.finalCountdown).toEqual(4);
  });
});

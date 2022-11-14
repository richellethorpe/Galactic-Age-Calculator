import Age from  './../src/js/ageCalc.js';

describe (`Age`, () => {
  test(`should correctly create an age object that contains multiple ages`, () => {
    const ages =new Age(4,2,5,7,4);
    expect(age.mercuryYrs).toEqual(4);
    expect(age.venusYrs).toEqual(2);
    expect(age.marsYrs).toEqual(5);
    expect(age.jupiterYrs).toEqual(7);
    expect(age.finalCountdown).toEqual(4);
  });
});

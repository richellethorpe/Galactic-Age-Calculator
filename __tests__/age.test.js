import AgeCalc from  './../src/js/ageCalc.js';

describe (`AgeCalc`, () => {
  test(`should correctly create an age object that contains planet, user age, and life expectancy`, () => {
    const ageCalc = new AgeCalc("earth", 36, 90)
    expect(ageCalc.planet).toEqual("earth");
    expect(ageCalc.userAge).toEqual(36);
    expect(ageCalc.userLifeExpectancy).toEqual(90);
  });
});

//it will check

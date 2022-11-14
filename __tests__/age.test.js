import AgeCalc from  './../src/js/ageCalc.js';

describe (`AgeCalc`, () => {
  test(`should correctly create an age object that contains planet, user age, and life expectancy`, () => {
    const ageCalc = new AgeCalc("earth", 36, 90)
    expect(ageCalc.planet).toEqual("earth");
    expect(ageCalc.userAge).toEqual(36);
    expect(ageCalc.userLifeExpectancy).toEqual(90);
  });

  test(`should correctly create an age based on user age input to calculate their age on mercury`, () => {
    let newPlanet = new AgeCalc("mercury", 36)
    newPlanet.mercuryCalculation()
    expect(newPlanet.userAge).toEqual(150);
    })

  test(`should correctly create an age based on user age input to calculate their age on venus`, () => {
    let newPlanet2 = new AgeCalc("venus", 36)
    newPlanet2.venusCalculation()
    expect(newPlanet2.userAge).toEqual(58);
    }) 

  test(`should correctly create an age based on user age input to calculate this age on mars`, () => {
    let newPlanet3 = new AgeCalc("mars", 36)
    newPlanet3.marsCalcuation()
    expect(newPlanet3.userAge).toEqual(19);
  })

  test(`should correctly create an age based on user age input to calculate this age on jupiter`, () => {
    let newPlanet4 = new AgeCalc("jupiter", 36)
    newPlanet4.jupiterCalculation()
    expect(newPlanet4.userAge).toEqual(3);
  })

  test(`should correctly calculate baseline life to live if user is on earth`, () => {
    let planetEarth = new AgeCalc("earth", 36, 90)
    planetEarth.lifeToLive()
    expect(planetEarth.lifeLeft).toEqual(54);
  })

  test(`should correctly calculate the life to to live if the user is on Mercury`, () => {
    let newPlanet = new AgeCalc("mercury", 36, 90)
    newPlanet.mercuryCalculation()
    expect(newPlanet.lifeLeft).toEqual(225)
  })

  test(`should correctly calculate the life to to live if the user is on Venus`, () => {
    let newPlanet = new AgeCalc("venus", 36, 90)
    newPlanet.venusCalculation()
    expect(newPlanet.lifeLeft).toEqual(87)
  })

  test(`should correctly calculate the life to to live if the user is on Mars`, () => {
    let newPlanet = new AgeCalc("mars", 36, 90)
    newPlanet.marsCalcuation()
    expect(newPlanet.lifeLeft).toEqual(29);
  })

  test(`should correctly calculate the life to to live if the user is on Jupiter`, () => {
    let newPlanet = new AgeCalc("jupiter", 36, 90)
    newPlanet.jupiterCalcuation()
    expect(newPlanet.lifeLeft).toEqual(5);
  })

  })

//no

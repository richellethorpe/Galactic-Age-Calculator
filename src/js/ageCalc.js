export default class AgeCalc {
  constructor(planet, userAge, userLifeExpectancy){
    this.planet = planet;
    this.userAge = userAge;
    this.userLifeExpectancy= userLifeExpectancy;
  }

  mercuryCalculation() {
    this.userAge = Math.round(this.userAge / .24);
  }

  venusCalculation() {
    
  }
}
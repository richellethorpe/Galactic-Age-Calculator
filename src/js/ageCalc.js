export default class AgeCalc {
  constructor(planet, userAge, userLifeExpectancy){
    this.planet = planet;
    this.userAge = userAge;
    this.userLifeExpectancy= userLifeExpectancy;
    this.lifeToLive = 0

  }

  mercuryCalculation() {
    this.userAge = Math.round(this.userAge / .24);
  }

  venusCalculation() {
    this.userAge = Math.round(this.userAge / .62);
  }

  marsCalcuation() {
    this.userAge = Math.round(this.userAge /1.88)
  }
  
  jupiterCalculation() {
    this.userAge = Math.round(this.userAge / 11.86);
  }

  lifeToLive() {
    
  }
}
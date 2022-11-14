export default class AgeCalc {
  constructor(planet, userAge, userLifeExpectancy){
    this.planet = planet;
    this.userAge = userAge;
    this.userLifeExpectancy= userLifeExpectancy;
    this.lifeLeft = 0

  }

  mercuryCalculation() {
    this.userAge = Math.round(this.userAge / .24);
    this.lifeLeft = (Math.round(this.userLifeExpectancy /.24) - this.userAge);
    
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
    this.lifeLeft = this.userLifeExpectancy - this.userAge;
  }
};
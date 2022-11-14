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
    this.lifeLeft = (Math.round(this.userLifeExpectancy /.62) - this.userAge);
  }

  marsCalcuation() {
    this.userAge = Math.round(this.userAge /1.88);
    this.lifeLeft =(Math.round(this.userLifeExpectancy/ 1.88) - this.userAge);
  }
  
  jupiterCalculation() {
    this.userAge = Math.round(this.userAge / 11.86);
    this.lifeLeft =(Math.round(this.userLifeExpectancy/ 11.86) - this.userAge);
  }

  lifeToLive() {
    this.lifeLeft = this.userLifeExpectancy - this.userAge;
  }
}
export default class AgeCalc {
  constructor(planet, userAge, userLifeExpectancy){
    this.planet = planet;
    this.userAge = userAge;
    this.userLifeExpectancy= userLifeExpectancy;
    this.lifeLeft = 0
    this.lifePostExpectancy=0

  }

  mercuryCalculation() {
    this.userAge = Math.round(this.userAge / .24);
    this.userLifeExpectancy = Math.round(this.userLifeExpectancy /.24);
    
  }

  venusCalculation() {
    this.userAge = Math.round(this.userAge / .62);
    this.userLifeExpectancy =Math.round(this.userLifeExpectancy/ .62);
  }

  marsCalcuation() {
    this.userAge = Math.round(this.userAge /1.88);
    this.userLifeExpectancy =Math.round(this.userLifeExpectancy/ 1.88);
  }
  
  jupiterCalculation() {
    this.userAge = Math.round(this.userAge / 11.86);
    this.userLifeExpectancy =Math.round(this.userLifeExpectancy/ 11.86);
  }



  yearsPastExpectancy() {

  }

}
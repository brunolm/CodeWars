// http://www.codewars.com/kata/patterncraft-visitor/solutions/javascript/me

class Marine {
  constructor() {
    Object.assign(this, {
      health: 100
    });
  }
  accept(visitor) { visitor.visitLight(this); }
}

class Marauder {
  constructor() {
    Object.assign(this, {
      health: 125
    });
  }
  accept(visitor) { visitor.visitArmored(this); }
}

class TankBullet {
  visitLight(unit) {
    unit.health -= 21;
  }
  visitArmored(unit) {
    unit.health -= 32;
  }
}
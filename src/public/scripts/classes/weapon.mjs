class Weapon {
  constructor({ name, damage, picture }) {
    this.name = name;
    this.damage = damage;
    this.picture = picture;
  }

  getPicture() {
    return this.picture;
  }

  getName() {
    return this.name;
  }
}

export { Weapon };

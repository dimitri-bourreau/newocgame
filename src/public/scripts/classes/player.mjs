class Player {
  constructor({name, id, picture, weapon}) {
    this.name = name;
    this.picture = picture;
    this.id = id;
    this.weapon = weapon;
    this.health = 100;
    this.turn = id == 'player-1' ? true : false;
   };

  insertDataInDom() {
    const playerAside = document.getElementById(this.id);
    const playerName = playerAside.getElementsByClassName('player-name')[0];
    const playerImage = playerAside.getElementsByClassName('card-img-top')[0];
    const playerHealth = playerAside.getElementsByClassName('progress-bar')[0];
    const playerWeaponImg = playerAside.getElementsByClassName('img-thumbnail')[0];
    playerName.innerHTML = this.name;
    playerImage.src = `/public/images/${this.picture}`;
    playerImage.alt = this.name;
    playerHealth.innerHTML = this.health;
    playerHealth.setAttribute('aria-valuenow', this.health.toString());
    playerHealth.style.width = `${this.health}%`;
    playerWeaponImg.src = `/public/images/${this.weapon.picture}`;
    playerWeaponImg.alt = this.weapon.name;
  }
};

export { Player };
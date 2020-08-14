function insertDataInDom() {
  const playerAside = document.getElementById(this.id);
  const playerName = playerAside.getElementsByClassName('player-name')[0];
  const playerImage = playerAside.getElementsByClassName('card-img-top')[0];
  const playerHealth = playerAside.getElementsByClassName('progress-bar')[0];
  const playerWeaponImg = playerAside.getElementsByClassName(
    'img-thumbnail'
  )[0];
  const playerWeaponNameDamage = playerAside.getElementsByClassName(
    'weapon-name-damage'
  )[0];
  const playerTurnOn = playerAside.getElementsByClassName(
    'player-turn-on'
  )[0];
  const playerTurnOff = playerAside.getElementsByClassName(
    'player-turn-off'
  )[0];
  playerName.innerHTML = this.name;
  playerImage.src = `/public/images/${this.picture}`;
  playerImage.alt = this.name;
  playerHealth.innerHTML = this.health.toString();
  playerHealth.setAttribute('aria-valuenow', this.health.toString());
  playerHealth.style.width = `${this.health}%`;
  playerWeaponImg.src = `/public/images/${this.weapon.getPicture()}`;
  playerWeaponImg.alt = this.weapon.getName();
  playerWeaponNameDamage.innerHTML = `${this.weapon.name} : ${this.weapon.damage} dégâts`;
  if (this.turn) {
    playerTurnOn.style.display = 'block';
    playerTurnOff.style.display = 'none';
  } else {
    playerTurnOff.style.display = 'block';
    playerTurnOn.style.display = 'none';
  }
}

export { insertDataInDom };
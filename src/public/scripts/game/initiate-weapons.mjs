import { Weapon } from '../classes/weapon.mjs';

function initiateWeapons() {
  return {
    fist: new Weapon({
      name: 'Poing',
      damage: 10,
      picture: 'weapon-fist.jpeg',
    }),
    lader: new Weapon({
      name: 'Échelle',
      damage: 30,
      picture: 'weapon-fist.jpeg',
    }),
    mathieu: new Weapon({
      name: 'Regard de Mathieu',
      damage: 100,
      picture: 'weapon-fist.jpeg',
    }),
  };
}

export { initiateWeapons };

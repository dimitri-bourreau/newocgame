import { Player } from '../classes/player.mjs';

function initiatePlayers({ fists }) {
  return {
    player1: new Player({ name: 'Thomas Pesquet', picture: '/pesquet.png', weapon: fists }),
    player1: new Player({ name: 'Jack Bauer', picture: '/bauer.png', weapon: fists }),
  };
}

export { initiatePlayers };

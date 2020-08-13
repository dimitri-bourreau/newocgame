import { Player } from '../classes/player.mjs';

function initiatePlayers({ fists }) {
  return {
    player1: new Player({ name: 'Thomas Pesquet', id: 'player-1', picture: '/pesquet.png', weapon: fists }),
    player2: new Player({ name: 'Jack Bauer', id: 'player-2', picture: '/bauer.png', weapon: fists }),
  };
}

export { initiatePlayers };

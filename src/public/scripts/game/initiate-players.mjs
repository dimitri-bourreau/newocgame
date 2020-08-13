import { Player } from '../classes/player.mjs';

function initiatePlayers({ fist }) {
  return {
    player1: new Player({ name: 'Thomas Pesquet', id: 'player-1', picture: '/pesquet.png', weapon: fist }),
    player2: new Player({ name: 'Jack Bauer', id: 'player-2', picture: '/bauer.png', weapon: fist }),
  };
}

export { initiatePlayers };

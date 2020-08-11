function resetGame(event) {
  event.preventDefault();
  window.location.reload();
}

function listenToResetBtn(id) {
  if (typeof id !== 'string') throw new Error('id must be string');
  const resetBtn = document.getElementById(id);
  resetBtn.addEventListener('click', resetGame);
}

export { listenToResetBtn };

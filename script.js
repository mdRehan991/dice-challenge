window.onload = function() {
  dice();
}

const dice = () => {

  const heading1 = document.getElementsByTagName('h1')[0];
  const player1 = document.getElementsByTagName('img')[0];
  const player2 = document.getElementsByTagName('img')[1];

  let random1 = Math.floor(Math.random() * 6 + 1);
  let random2 = Math.floor(Math.random() * 6 + 1);

  player1.src = `images/dice${random1}.png`;
  player2.src = `images/dice${random2}.png`;


  if (random1 > random2) {
    heading1.innerHTML = "🚩 Player 1 Wins";
  } else if (random1 < random2) {
    heading1.innerHTML = "Player 2 Wins 🚩";
  } else if (random1 === random2) {
    heading1.innerHTML = "<---DRAW--->";
  }
}

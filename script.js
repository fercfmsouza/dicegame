const dice1Ref = document.querySelector('.img1');
const dice2Ref = document.querySelector('.img2');

function rollDices() {
  const randomNumber1 = Math.floor(Math.random() * 6 + 1);
  const randomNumber2 = Math.floor(Math.random() * 6 + 1);

  dice1Ref.setAttribute('src', `./images/dice${randomNumber1}.png`);
  dice2Ref.setAttribute('src', `./images/dice${randomNumber2}.png`);

  if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = '🎉 Player 1 win!';
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 2 win! 🎉';
  } else {
    document.querySelector('h1').innerHTML = 'Draw';
  }
}

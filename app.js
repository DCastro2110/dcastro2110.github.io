let isRunning = false;
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');

stopBtn.setAttribute('disabled', true);

function getRandomNumber(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min)) + min
}

let timer1, timer2;
const text = document.getElementsByClassName('text')[0];
const audioStop = document.querySelector('.audio-stop');
const audioContinue = document.querySelector('.audio-continue');

function start() {
  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');

  if(timer1 !== null) {
    clearTimeout(timer1);
  }
  if(timer2 !== null) {
    clearTimeout(timer2);
  }

  text.innerHTML = 'Rodando';
  mountTimer();
}

function stop() {
  text.innerHTML = 'Parado'

  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);

  if(timer1 !== null) {
    clearTimeout(timer1);
  }
  if(timer2 !== null) {
    clearTimeout(timer2);
  }
}

function mountTimer() {
  timer1 = setTimeout(() => {
    audioStop.play();
    text.innerHTML = 'Pausar'
    timer2 = setTimeout(() => {
      audioContinue.play();
      text.innerHTML = 'Continuar'
      mountTimer();
    }, getRandomNumber(1000, 7000))
  }, getRandomNumber(3000, 20000))
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
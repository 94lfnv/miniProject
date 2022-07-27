const inputText = document.querySelector("#input-text");
const inputBtn = document.querySelector("#input-btn");
const firstWord = document.querySelector("#firstword");
const secondWord = document.querySelector("#secondword");
const reStartBox = document.querySelector("#reStartBox");
const reStartBtn = document.querySelector("#reStartBtn");
const startBox = document.querySelector("#startBox");
const startBtn = document.querySelector("#startBtn");
const miniWatch = document.querySelector(".mini-watch");

const playGame = () => {
  startBox.style.visibility = "hidden";
};

startBtn.addEventListener("click", playGame);

reStartBox.style.visibility = "hidden";
// hidden - visible로 div 박스 생겼다 사라졌다 가능

const onInput = (event) => {
  currWord = event.target.value;
};
inputText.addEventListener("input", onInput);
// 맨 처음 값 받기

let prevWord, currWord;
let firstTurn = 1;
let turn = firstTurn;
let count = 1;

const onClickBtn = () => {
  if (
    currWord.search(/\s/) === -1 &&
    (!prevWord || prevWord[prevWord.length - 1] === currWord[0])
  ) {
    prevWord = currWord;
    if (turn === firstTurn) {
      firstWord.textContent = prevWord;
      secondWord.textContent = "";
      turn++;
    } else {
      secondWord.textContent = prevWord;
      firstWord.textContent = "";
      turn--;
    }
  } else {
    if (count === 1) {
      alert("한 번 더 기회를 드릴게요. 조건을 떠올려 보세요!🔥");
      count--;
      finishGame();
      inputText.value = "";
      inputText.focus();
    } else {
      showElement(reStartBox);
      deactivate(inputText);
      deactivate(inputBtn);
    }
  }
  inputText.value = "";
  inputText.focus();
};

inputBtn.addEventListener("click", onClickBtn);

const showElement = (el) => {
  el.style.visibility = "visible";
};
const deactivate = (el) => {
  el.disabled = true;
};

let timer;

function finishGame() {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    if (count === 1) {
      alert("한 번 더 기회를 드릴게요. 5초 내에 입력해야 합니다!🔥");
      count--;
      finishGame();
      inputText.value = "";
      inputText.focus();
    } else {
      showElement(reStartBox);
      deactivate(inputText);
      deactivate(inputBtn);
    }
  }, 5000);
}

inputBtn.addEventListener("click", finishGame);

const onClickStart = () => {
  const hideElement = (el) => {
    el.style.visibility = "hidden";
  };

  const activate = (el) => {
    el.disabled = false;
  };

  inputText.value = "";
  firstWord.textContent = "";
  secondWord.textContent = "";
  prevWord = null;
  currWord = null;
  turn = firstTurn;
  count = 1;

  hideElement(reStartBox);
  showElement(startBox);
  activate(inputText);
  activate(inputBtn);
};

reStartBtn.addEventListener("click", onClickStart);

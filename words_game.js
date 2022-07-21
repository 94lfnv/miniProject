const inputText = document.querySelector("#input-text");
const inputBtn = document.querySelector("#input-btn");
const firstWord = document.querySelector("#firstword");

const onInput = (event) => {
  currentWord = event.target.value;
};

inputText.addEventListener("input", onInput);

let prevWord, currentWord;
let firstTurn = 1;
let turn = firstTurn;

const onClickBtn = () => {
  if (
    currentWord.search(/\s/) === -1 &&
    (!prevWord || prevWord[prevWord.length - 1] === currentWord[0])
  ) {
    prevWord = currentWord;
    firstWord.innerHTML = currentWord;
  } else {
    alert(
      "단어를 조건에 맞게 입력해주세요.\n1. 띄어쓰기 X\n2. 연속으로 같은 단어 X"
    );
  }
};

inputBtn.addEventListener("click", onClickBtn);

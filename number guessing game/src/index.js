const guessNum = document.querySelector('#guess');
const limitNum = document.querySelector('#limitNum');
const btn = document.querySelector('#btn');
const printGuess = document.querySelector('#guessNum');
const printMachine = document.querySelector('#machine');
const conResult = document.querySelector('.con-result');

function printNum(limitval, guessval){
  const machineNum = Math.floor(Math.random() * limitval+1);
  printGuess.innerText = guessval;
  printMachine.innerText = machineNum;
  result(guessval, machineNum)
}

function result(guess, machine){
  const printResult = document.querySelector('#result');
  let resultMsg = "You Lost!";
  if(guess === machine){
  resultMsg = "You Won!";
  }
  printResult.innerText = resultMsg;

}

btn.addEventListener('click',()=>{
  const parseLimit = parseInt(limitNum.value, 10);
  const parseGuess = parseInt(guessNum.value, 10);
  if(parseGuess && parseLimit){
    if((parseLimit >= 0) && (parseLimit >= parseGuess)){
      conResult.classList.remove('hide');
      printNum(parseLimit, parseGuess);
    }else{
      alert('다시 입력해주세요.')
    }
  }else{
    alert('숫자를 입력하세요.')
  }
});

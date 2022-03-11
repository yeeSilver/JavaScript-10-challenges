const quotes = [
  {
    quote: "My mama told me when I was young, 'We are all born superstars'",
    author: "Lady GAGA"
  },
  {
    quote: "When it's covered in all the colored lights Where the runaways are running the night Impossible comes true, it's taking over you",
    author: "the Greates Show"
  },
  {
    quote: "어떤 비교도 난 거부해 이건 겸손한 얘기 가치를 논하자면 나는 billion dollar baby 뭘 쫌 아는 사람들은 다 알아서 알아봐 아무나 잡고 물어봐 누가 제일 잘 나가?",
    author: "I go by the name CL of 2NE1"
  },
  {
    quote: "You know me better than I do",
    author: "Ari"
  },
  {
    quote: "You are so golden You are so golden",
    author: "Harry Styles"
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
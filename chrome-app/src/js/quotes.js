const lyrics = [
  {
    lyric: "잊지마 넌 흐린 어둠 사이 왼손으로 그린 별 하나 보이니 그 유일함이 얼마나 아름다운지 말야 You are my celebrity",
    author: "IU",
    link: "https://w.namu.la/s/06e49d13223ec40ea7aca796b0f1a7244bcf3e123e669dc6d6a60e5bbdcc71dbf53bed58f48f956d8925c093f7d60e95caa6427312dc86b55a2e319c6311d4a7f32a23fc4db82b0ffb9a059190b539c098e3b6aa5f6f6ef45c61114361592f32b96ed2a248d89df17d66496e61cbfe76"
  },
  {
    lyric: "It feels so good to be so young And have this fun and be successful",
    author: "Ariana Grande",
    link: "https://t2.genius.com/unsafe/305x305/https%3A%2F%2Fimages.genius.com%2F9f05280ef6525463ff5c27651dbdec7b.561x561x1.png"
  },
  {
    lyric: "어떤 비교도 난 거부해 이건 겸손한 얘기 가치를 논하자면 나는 billion dollar baby 뭘 쫌 아는 사람들은 다 알아서 알아봐 아무나 잡고 물어봐 누가 제일 잘 나가?",
    author: "I go by the name CL of 2NE1",
    link: "https://upload.wikimedia.org/wikipedia/ko/0/0b/2NE1_-_%EB%82%B4%EA%B0%80_%EC%A0%9C%EC%9D%BC_%EC%9E%98_%EB%82%98%EA%B0%80.jpg"
  },
  {
    lyric: "꿈에서 봤던 빛 그 꽃을 찾아서 난 지금 어딘가로 야간비행 내일이 없다고 해도 달려가",
    author: "백예린",
    link: "https://w.namu.la/s/59ea72e1d58d7ab211e3f7c44b3e9798c30914cd294d020f0596b410764f1b88a2b0d5f00f292bf68fefcb1ebe24a8511942fd1c561d0af11299b141483a9220432e6181e350586a5c299d191a5a1fec395c33151176224b0685908f40f6f668627e3644353d0f3a2e223e7e05827cd6"
  },
  {
    lyric: "You are so golden You are so golden",
    author: "Harry Styles",
    link: "https://upload.wikimedia.org/wikipedia/en/c/ce/Harry_Styles_-_Golden.png"
  }
]

const lyric = document.querySelector(".lyric");
const artist = document.querySelector(".artist");

const todaysLyric = lyrics[Math.floor(Math.random() * lyrics.length)];
console.log(todaysLyric.lyric);
lyric.innerText = todaysLyric.lyric;
artist.innerText = todaysLyric.author;

const imgLink = todaysLyric.link;
console.log(imgLink)
const bgImg = document.querySelector('.musicImg');
bgImg.src = `${imgLink}`;
 // apend하면 가장 마지막요소로 삽입됨.(prepend는 제일 첫 요소)
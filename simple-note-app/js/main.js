const btn_add = document.querySelector('.btn-add');
const form = document.querySelector('form');
const textarea = document.querySelector('textarea');
// 버튼 활성화
btn_add.disabled = true;
form.addEventListener('keyup',() => {
  let text_val = textarea.value;
  if (text_val){
    btn_add.disabled = false;
    btn_add.classList.add('abled');
  }else{
    btn_add.disabled = true;
    btn_add.classList.remove('abled');
  }
})


btn_add.addEventListener('click',() => {
   const save_val = textarea.value;
   const date = new Date().toLocaleString();
   localStorage.setItem(date, save_val)
})

const container = document.querySelector('.cont-note');
function print(){
  for (var i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i)
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
    const note_val = localStorage.getItem(localStorage.key(i))
    const div = document.createElement("div");
     div.classList.add("text");
     div.innerHTML=`
     <div>
        ${note_val}
      </div>
      <img src="../img/remove_circle_outline_black_24dp.svg" alt="" class="remove">
     `
     container.appendChild(div);
     ["remove"].forEach((cls) => {
       console.log(i)
       div.querySelector(`.${cls}`)
       .addEventListener("click", () => { remove(key)
        })
      });
    }
}
print()

function remove(key){
  localStorage.removeItem(key);
  location.reload()
}




//문제1 : 메모를 remove하고 새로운 메모를 작성할 때, 키 값이 겹쳐서 overwright된다. ( length + 1 로 들어가기 때문) -> date로 key를 잡아서 해결함!

//문제2 : reload으로 하니 부자연스럽다. display none으로 해서 유저 경험이 증가했으면 좋겠다. 
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

function save(value) {
  let num = localStorage.length
  num += 1; 
  localStorage.setItem(`note`+num, value)
}

btn_add.addEventListener('click',() => {
   const save_val = textarea.value;
   save(save_val);
})

const container = document.querySelector('.cont-note');
function print(){
  for (var i = 0; i < localStorage.length; i++){
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
    const note_val = localStorage.getItem(localStorage.key(i))
    const div = document.createElement("div");
     div.classList.add("text");
     div.classList.add(`note`+i);
     div.innerHTML=`
     <div>
        ${note_val}
      </div>
      <img src="../img/remove_circle_outline_black_24dp.svg" alt="" class="remove">
     `
     document.querySelector(".cont-note").appendChild(div);
     ["remove"].forEach((cls, p) => {
       console.log(localStorage.key(p))
      div
        .querySelector(`.${cls}`)
        .addEventListener("click", () => {
          remove(localStorage.key(p));
          
        })
      });
  }

}
print()

function remove(key){
  localStorage.removeItem(key);
}

//문제1 : 메모를 remove하고 새로운 메모를 작성할 때, 키 값이 겹쳐서 overwright된다. ( length + 1 로 들어가기 때문) -> 내일까지 해결해보도록 하쟈!
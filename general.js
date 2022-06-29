//modal

let open_btn=document.querySelector(".open_btn");
let close_btn=document.querySelector(".close");
let modal = document.querySelector(".modal");

function toggle_modal(){
  
  modal.classList.toggle("show");
};

open_btn.addEventListener("click", toggle_modal);
close_btn.addEventListener("click", toggle_modal);

window.onclick = function(event) {
  if (event.target == modal) {
   modal.classList.remove("show");
  }
}
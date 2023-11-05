let qr_inp = document.querySelector(".input")
let qr_btn = document.querySelector(".btn")
let qr_img = document.querySelector(".qr-img")
let img_box = document.querySelector(".box-img")

function getqr(){
    qr_img.src=  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" +qr_inp.value;
    img_box.classList.add("show")
}
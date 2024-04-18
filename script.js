let gBtn = document.getElementById("gBtn");
let curNum = document.getElementById("curNum");
function changeNum(){
    let genNum = Math.floor(Math.random() * 1000000000);
    curNum.textContent=`Uid: ${genNum}` ;

}
gBtn.addEventListener("click" , changeNum)
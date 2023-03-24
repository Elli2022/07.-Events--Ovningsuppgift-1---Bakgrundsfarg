
//steg för steg
const btn1 = document.getElementById('btn1');
btn1.addEventListener("click", function (){
    document.getElementById('btnContainer').style.backgroundColor = "hotpink";

});

//förenklat
document.getElementById('btn2').addEventListener("click", function(){
    document.getElementById('btnContainer').style.backgroundColor = "skyblue";
});

//förenklat
document.getElementById('btn3').addEventListener("click", function(){
    document.getElementById('btnContainer').style.backgroundColor = "orange";
});


let moto1 = document.getElementById('m1')
let moto2 = document.getElementById('m2')

function ver() {
    moto1.src = "imgs/mt07p.png";
    moto2.src = "imgs/mt07.png";
    moto2.style.bottom = '-50%'
    moto2.style.left = '-80%'
    moto2.style.height = '300px'
    document.getElementById('card').style.background = "linear-gradient(to right, rgb(221, 203, 203) 20%, rgb(21, 22, 22) 80%)";
}
function bra() {
    moto1.src = "imgs/mt07branc.png";
    moto2.src = "imgs/mt07branc.png";
    moto2.style.bottom = '-35%'
    moto2.style.height= '320px'
    moto2.style.left = '-80%'
    document.getElementById('card').style.background = "linear-gradient(to right, rgb(230, 224, 224) 20%, rgb(26, 52, 165) 80%)";
    
}
function vem() {
    moto1.src = "imgs/mt07ver.png";
    moto2.src = "imgs/mt07vem.png";
    moto2.style.height = '420px'
    moto2.style.left = '-92%'
    moto2.style.bottom = '-45%'
    document.getElementById('card').style.background = "linear-gradient(to right, rgb(165, 41, 41) 20%, rgb(21, 22, 22) 80%)";
}
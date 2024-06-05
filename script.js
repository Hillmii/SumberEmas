const hamburger = document.querySelector('#hamburger');
const x = document.querySelector('#x');
const promosiX = document.querySelector('.x-buttom');
const navbar = document.querySelector('.nav-center');
const rBurger = document.querySelector('.hamburger');
const promosi = document.querySelector('.promosi-side');
const progresBar = document.querySelector(".progres-bar");


hamburger.onclick = () => {
    navbar.classList.add('active');
    rBurger.classList.toggle('x-ham');
    setTimeout(() =>{
        x.classList.toggle('hapus');
   },300);
}

x.onclick = () => {
    navbar.classList.remove('active');
    x.classList.toggle('hapus');
    setTimeout(() => {
        rBurger.classList.toggle('x-ham');
    }, 300);
}

promosiX.onclick = () => {
    promosi.classList.add('none');
    progresBar.classList.add('gorund-progres');
}

function progres(){
    const {scrollTop, scrollHeight} = (document.documentElement);
    const presentasi = scrollTop / (scrollHeight - window.innerHeight) * 100 + "%";
    console.log(presentasi);
    progresBar.style.setProperty("--progress", presentasi);
}
document.addEventListener('scroll', progres)
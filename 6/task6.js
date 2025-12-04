let imageOne = document.querySelector('.img_one');
let imageTwo = document.querySelector('.img_two');
let imageTree = document.querySelector('.img_tree');
let firstI = 0;
let sliderItem = [imageOne, imageTwo, imageTree];

sliderItem[firstI].style.display = 'block';

function btn() {
    for (let i = 0; i < sliderItem.length; i++) {
        sliderItem[i].style.display = 'none';  
    }
    
    let nextI = (firstI + 1) % sliderItem.length;
    sliderItem[nextI].style.display = 'block'; 
    firstI = nextI;
}
let timer = setInterval(btn, 3000);
document.querySelector('.btn').onclick = btn;



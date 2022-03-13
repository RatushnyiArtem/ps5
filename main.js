$(document).ready(function(){
    $('.butter, .poston').click(function(event){
        $(".header, .menu, .poston, .butter").toggleClass("active");
    });
 });
 $(document).ready(function(){
    $('.new').click(function(event){
        $(".name_game, .price").toggleClass("active");
    });
 });
 $(document).ready(function(){
    $('.coster').hover(function(event){
        $(".cost").toggleClass("active");
    });
 });
 $(document).ready(function(){
    $('.card_photo').hover(function(event){
        $(".before, .after").toggleClass("active");
    });
 });
 $(document).ready(function(){
    $('.card_photo1').hover(function(event){
        $(".before1, .after1").toggleClass("active");
    });
 });
 $(document).ready(function(){
    $('.card_photo2').hover(function(event){
        $(".before2, .after2").toggleClass("active");
    });
 });
 let mainer = document.getElementById('crog')
 mainer.addEventListener('mouseover', starter)
 function starter(){
     let Ind = 0
 showSlide()
 function showSlide() {
     let i
     let slide = document.getElementsByClassName('crot')
    for( i = 0; i < slide.length; i++){
     slide[i].style.display = 'none'
    }
    Ind++
    if(Ind > slide.length){
     Ind = 1
    }
    slide[Ind-1].style.display = 'block'
    setTimeout(showSlide, 3400)
    
 }
 }
 let liner = document.getElementById('crof')
 liner.addEventListener('mouseover', start)
 function start(){
     let Inder = 0
 showSlider()
 function showSlider() {
     let v
     let slider = document.getElementsByClassName('star')
    for( v = 0; v < slider.length; v++){
     slider[v].style.display = 'none'
    }
    Inder++
    if(Inder > slider.length){
     Inder = 1
    }
    slider[Inder-1].style.display = 'block'
    setTimeout(showSlider, 3400)
    
 }
 }
 let miner = document.getElementById('croch')
 miner.addEventListener('mouseover', starton)
 function starton(){
     let Indor = 0
 show()
 function show() {
     let c
     let slidon = document.getElementsByClassName('fav')
    for( c = 0; c < slidon.length; c++){
     slidon[c].style.display = 'none'
    }
    Indor++
    if(Indor > slidon.length){
     Indor = 1
    }
    slidon[Indor-1].style.display = 'block'
    setTimeout(show, 3400)
    
 }
 }
 $(document).ready(function(){
    $('.btn_changes').click(function(event){
        $(".btn_changes, .libr_card, .libr_card1, .libr_card2").toggleClass("active");
    });
 });
document.body.onload = function() {
    setTimeout(function(){
        let load_circ = document.getElementsByClassName('test_line')
    })
}
$(document).ready(function(){
    $('.fa-sort').click(function(event){
        $(".social, .text_social").toggleClass("active");
    });
 });
 mainer.addEventListener('click', changeChar)
 let block_path = document.getElementById('gamers')
 function changeChar(){
    block_path.innerHTML = `<div class="text_game">
    <div class="new">
        <p>New</p>
    </div>
    <div class="name_game">
        <h1 class="name_of_spd">Assasin's creed:
            <br>
             Valhalla</h1>
        <h1 class="whatnew">If you want to know something new click 
           <br> 
           button below</h1>
        <a class="whatever" href="">Official site</a>
    </div>
    <div class="price">
        <div class="cost">
           <p>$50.00</p>
        </div>
        <div class="purch">
           <a class="coster" href="">Purchase</a>
        </div>
    </div>
</div>
<div class="phon_images">
    <img src="./img/yelim-kim-maleaction-removebg-preview.png" alt="">
    <div class="blot">
        <div class="shad"></div>
    </div>
    
</div>`
$(document).ready(function(){
    $('.new').click(function(event){
        $(".name_game, .price").toggleClass("active");
    });
 });
 }
 liner.addEventListener('click', changeChart)
 let block_pather = document.getElementById('gamers')
 function changeChart(){
    block_pather.innerHTML = `<div class="text_game">
    <div class="new">
        <p>New</p>
    </div>
    <div class="name_game">
        <h1 class="name_of_spd">Forza Horizon:
            <br>
             Five</h1>
        <h1 class="whatnew">If you want to know something new click 
           <br> 
           button below</h1>
        <a class="whatever" href="">Official site</a>
    </div>
    <div class="price">
        <div class="cost">
           <p>$34.00</p>
        </div>
        <div class="purch">
           <a class="coster" href="">Purchase</a>
        </div>
    </div>
</div>
<div class="phon_images">
    <img src="./img/SeekPng.com_black-png_296509.png    " alt="">
    <div class="blotter">
        <img src = "./img/pngwing.com (10).png" alt="">
    </div>
    
</div>`
$(document).ready(function(){
    $('.new').click(function(event){
        $(".name_game, .price").toggleClass("active");
    });
 });
 }
 miner.addEventListener('click', changeCharte)
 let block_patht = document.getElementById('gamers')
 function changeCharte(){
    block_patht.innerHTML = `<div class="text_game">
    <div class="new">
        <p>New</p>
    </div>
    <div class="name_game">
        <h1 class="name_of_spd">Assasin's creed:
            <br>
             Unity</h1>
        <h1 class="whatnew">If you want to know something new click 
           <br> 
           button below</h1>
        <a class="whatever" href="">Official site</a>
    </div>
    <div class="price">
        <div class="cost">
           <p>$69.00</p>
        </div>
        <div class="purch">
           <a class="coster" href="">Purchase</a>
        </div>
    </div>
</div>
<div class="phon_images">
    <img src="./img/Assassins-Creed-Unity-PNG-Free-Download.png" alt="">
    <div class="blot">
        <div class="shad"></div>
    </div>
    
</div>`
$(document).ready(function(){
    $('.new').click(function(event){
        $(".name_game, .price").toggleClass("active");
    });
 });
 }
 $(document).ready(function(){
    $('.profile').click(function(event){
        $(".social").toggleClass("torerro");
    });
 });
 








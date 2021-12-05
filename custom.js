let openBtn = document.getElementById('open-button');
let modal = document.getElementById('modal');
openBtn.addEventListener('click', function(){
    modal.style.display= "flex";
});
 let closeBtn = document.getElementById('close');
 closeBtn.addEventListener('click', function(){
     modal.style.display="none";
 });


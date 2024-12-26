let listA=document.querySelectorAll('a')
let active = 'intro'
let zIndex =2;

listA .forEach(a =>{
    a.addEventListener('click',function(event){
        let valutab = a.dataset.tab;
        if (valutab && valutab != active){
            let tabactive = document.getElementById(valutab);
            zIndex++;
            tabactive.style.zIndex = zIndex;
        }
    })
})
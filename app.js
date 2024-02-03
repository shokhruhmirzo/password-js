var form = document.querySelector('form');
var inp = document.querySelector('input');
var btn = document.querySelector('button');

form.addEventListener('submit', function(e){
    e.preventDefault();

    var val = inp.value

    if(val.length < 8 || val == val.toLowerCase()){
        inp.classList.add('error-border');
        inp.classList.remove('success-border');
    }else{
        inp.classList.remove('error-border');
         inp.classList.add('success-border');
    }
}
)


document.addEventListener('contextmenu', function (p) {
    p.preventDefault();
    alert("Kod ni ko'chirish mumkinmas !!!");
});

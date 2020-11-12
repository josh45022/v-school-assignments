var form = document["form-1"]
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");

form.add.addEventListener("click", function (e) {
    e.preventDefault()
    
    var first = parseInt(form.first.value);
    form.first.value = "";
    var sec = parseInt(form.sec.value);
    form.sec.value = "";
    var answer = first + sec;
    var box1 = document.querySelector('.box-1');
    box1.append(answer);
}
)

form.subtract.addEventListener("click", function (f) {
    f.preventDefault()
    var sFirst = parseInt(form.sfirst.value);
    form.sfirst.value = "";
    var sSec = parseInt(form.ssec.value);
    form.ssec.value = "";
    var sAnswer = sFirst - sSec;
    var box2 = document.querySelector('.box-2');
    box2.append(sAnswer)
}
)

form.multiply.addEventListener("click", function (g) {
    g.preventDefault()
    var mFirst = parseInt(form.mfirst.value);
    form.mfirst.value = "";
    var mSec = parseInt(form.msec.value);
    form.msec.value = "";
    var answer = mFirst * mSec;
    var box3 = document.querySelector('.box-3');
    box3.append(answer)
}
)



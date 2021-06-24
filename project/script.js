function forclear() {
    document.getElementById("output").innerHTML = "0";
}
function removeZero() {
    var value = document.getElementById("output").innerHTML;
    if (value == "0") {
         value = " "
         document.getElementById("output").innerHTML = value;
    }
}
function perc() {
    var value = document.getElementById("output").innerHTML;
    value = value / 100;
    document.getElementById("output").innerHTML = value;
}
function fordisplay(value) {
    removeZero()
    document.getElementById("output").innerHTML += value;
}
function solve() {// =
     removeZero()
     var equation = document.getElementById("output").innerHTML;
     var solved = eval(equation);
     document.getElementById('output').innerHTML = solved;
}
function del() {//한글자 지우기
    var value = document.getElementById("output").innerHTML;
    value = value.slice(0,-1);
    document.getElementById("output").innerHTML = value;
    if (value == " " || value.length == 0) {
        value = "0"
        document.getElementById("output").innerHTML = value;
    }
}

function sqrt() {//제곱
    var value = document.getElementById("output").innerHTML;
    value = Math.sqrt(value)
    document.getElementById("output").innerHTML = value ;
}

function square() {//루트
    var value = document.getElementById("output").innerHTML;
    value = value*value
    document.getElementById("output").innerHTML = value ;
}
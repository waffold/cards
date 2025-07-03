function $(a) {
    return document.getElementById(a);
}

var cards = 52;
var two = 4;
var three = 4;
var four = 4;
var five = 4;
var six = 4;
var seven = 4;
var eight = 4;
var nine = 4;
var ten = 16;
var ace = 4;

function reset() {
    cards = 52;
    two = 4;
    three = 4;
    four = 4;
    five = 4;
    six = 4;
    seven = 4;
    eight = 4;
    nine = 4;
    ten = 16;
    ace = 4;
    $("2num").innerHTML = two;
    $("3num").innerHTML = three;
    $("4num").innerHTML = four;
    $("5num").innerHTML = five;
    $("6num").innerHTML = six;
    $("7num").innerHTML = seven;
    $("8num").innerHTML = eight;
    $("9num").innerHTML = nine;
    $("10num").innerHTML = ten;
    $("Anum").innerHTML = ace;
}

function lower(a) {
    switch(a) {
        case "2":
            if(two > 0) {
                two --;
                $("2num").innerHTML = two;
            }
            break;
        case "3":
            if(three > 0) {
                three --;
                $("3num").innerHTML = three;
            }
            break;
        case "4":
            if(four > 0) {
                four --;
                $("4num").innerHTML = four;
            }
            break;'2'
        case "5":
            if(five > 0) {
                five --;
                $("5num").innerHTML = five;
            }
            break;
        case "6":
            if(six > 0) {
                six --;
                $("6num").innerHTML = six;
            }
            break;
        case "7":
            if(seven > 0) {
                seven --;
                $("7num").innerHTML = seven;
            }
            break;
        case "8":
            if(eight > 0) {
                eight --;
                $("8num").innerHTML = eight;
            }
            break;
        case "9":
            if(nine > 0) {
                nine --;
                $("9num").innerHTML = nine;
            }
            break;
        case "10":
            if(ten > 0) {
                ten --;
                $("10num").innerHTML = ten;
            }
            break;
        case "A":
            if(ace > 0) {
                ace --;
                $("Anum").innerHTML = ace;
            }
            break;
    }
}
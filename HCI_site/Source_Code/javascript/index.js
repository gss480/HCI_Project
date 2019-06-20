// JavaScript source code
$(document).ready(function () {
    var hidden = false;

    $("button").click(function () {

        if (!hidden) {
            $("#Testrow").hide();
            hidden = true;
        }
        else {
            $("#Testrow").show();
            hidden = false;
        }
    });
});


//Code for factspage
function clickFunction1() {
    var x =
        document.getElementById("MommyFactsText");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function clickFunction2() {
    var x =
        document.getElementById("BabyFactsText");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function clickFunction3() {
    var x =
        document.getElementById("SuccessStoriesText");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function clickFunction4() {
    var x =
        document.getElementById("TipsText");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
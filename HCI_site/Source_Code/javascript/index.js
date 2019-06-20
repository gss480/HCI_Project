// JavaScript source code
$(document).ready(function () {
    $(".factstext").hide();
});

function clickFunction(element) {
    if ($(element).is(":hidden")) {
        $(element).show();
    } else {
        $(element).hide();
    }
}
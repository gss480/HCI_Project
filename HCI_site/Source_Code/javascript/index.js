// JavaScript source code
$(document).ready(function () {
    $(".factstext").hide();
});

function toggleHideElement(element) {
    if ($(element).is(":hidden")) {
        $(element).show();
    } else {
        $(element).hide();
    }
}
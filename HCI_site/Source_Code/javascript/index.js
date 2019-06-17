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
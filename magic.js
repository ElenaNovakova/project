function Magic() {
    var value1 = $("#1x1").val();
    var value2 = $("#1x2").val();
    var value3 = $("#2x3").val();
    var value4 = $("#3x1").val();
    var value5 = $("#3x2").val();
    var value6 = $("#3x3").val();
    var count = 0;
    var allCorrect = true;


    if (value1 == 3) {
        count += 1;
        $("#1x1").parent().css("background-color", "green")
    } else {
        $("#1x1").parent().css("background-color", "red");
        allCorrect = false;
    }
    if (value2 == 11) {
        count += 1;
        $("#1x2").parent().css("background-color", "green")
    } else {
        $("#1x2").parent().css("background-color", "red");
        allCorrect = false;
    }
    if (value3 == 1) {
        count += 1;
        $("#2x3").parent().css("background-color", "green")
    } else {
        $("#2x3").parent().css("background-color", "red");
        allCorrect = false;
    }
    if (value4 == 6) {
        count += 1;
        $("#3x1").parent().css("background-color", "green")
    } else {
        $("#3x1").parent().css("background-color", "red");
        allCorrect = false;
    }
    if (value5 == 5) {
        count += 1;
        $("#3x2").parent().css("background-color", "green")
    } else {
        $("#3x2").parent().css("background-color", "red");
        allCorrect = false;
    }
    if (value6 == 13) {
        count += 1;
        $("#3x3").parent().css("background-color", "green")
    } else {
        $("#3x3").parent().css("background-color", "red");
        allCorrect = false;
    }

    console.log(count);
    var wrongAnswers = 6 - count;
    if (allCorrect) {
        alert("Браво, го решивте магичниот квадрат!")
    } else {
        alert("Обидете се повторни, имате " + wrongAnswers + " грешки")
    }
}


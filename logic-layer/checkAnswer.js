function CheckAnswer(){

    // var studentAnswer = false;
    $("input").on("click", function (event) {
        if (givenQuestion.rightAnswer === event.target.id) {
           console.log("tocno");
            // studentAnswer = true;
        } else {
           console.log("netocno");
            // studentAnswer = false;
        }
        // console.log(studentAnswer);
        // return studentAnswer;
    });
}
function RenderTest() {

    var newGenerateQuestion = new QuestionRepo();
    this.givenQuestion = newGenerateQuestion.generateQuestions();
    var timer = new Timer(this.givenQuestion.time)
    $(".timer").html(timer);

    this.timeOut = ($(".timer")).text();
    console.log(this.timeOut);
 


    this.renderTestPage = function (givenQuestion) {
        $(".question").text(givenQuestion.question);

        $("#labelA").text("A: " + givenQuestion.answerA);
        $("#labelB").text("B: " + givenQuestion.answerB);
        $("#labelC").text("C: " + givenQuestion.answerC);
        $("#labelD").text("D: " + givenQuestion.answerD);
    }
    this.renderTestPage(this.givenQuestion);

    this.clearTimer = () => {
        $(".timer").empty();
        clearInterval(timer.countDown);
    }

    $("#next").on("click", this.clearTimer);

    this.getAnswers = []
    

    $('input').unbind('click').click((event) => {
        this.getAnswers.push(event.target.id)
        this.givenQuestion.userAnswers = this.getAnswers;
        // console.log(this.givenQuestion);
    });
}

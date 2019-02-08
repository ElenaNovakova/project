function OnClickLogic() {
    var renderPage = new RenderAll();

    this.clickToLogin = function () {
        renderPage.renderLogin()
    }
    $("#toLogInForm").on("click", this.clickToLogin)

    this.clickToTest = function () {
        renderPage.renederQuestions();
        var user = new RenderUser();
        return false;
    }
    $("#goToTest").on("click", this.clickToTest)


    this.nextLogic = () => {
        $('input').prop('checked', false);
        return false
    }
    $("#next").on("click", this.nextLogic)

    this.allQuestions = []
    this.collectAllQuestions = () => {
        var test = new RenderTest();
        this.allQuestions.push(test.givenQuestion);
        if (test.blabla === 0) {
            console.log("snema vreme");
            
        }

        // console.log(test.blabla);
        
        return this.allQuestions
    }

    this.notAnswered = function(){

    }

    $("#goToTest").on("click", this.collectAllQuestions)
    $("#next").on("click", this.collectAllQuestions)
    $("#testEnded").on("click", this.collectAllQuestions);

    this.clickToEnd = function () {
        // renderPage.testEnded()
        var resault = new RenderResults();
        $(".testContainer").css("display", "none")
        $(".testEnded").css("display", "flex")
        return false;
    }
    $("#testEnded").on("click", this.clickToEnd);


    var addPoints = new AddPoints()
    this.correctAnswer = () => {
        this.numberOfRight = 0;
        this.numberOfWrong = 0;
        this.numberNotAnswered = 0;
        var allQuestions = collectAllQuestions();
        for (let i = 0; i < allQuestions.length - 2; i++) {
            if (allQuestions[i].userAnswers == undefined) {
                addPoints.calcPoints(0);
                this.numberNotAnswered++;
            } else {
                if (allQuestions[i].userAnswers[allQuestions[i].userAnswers.length - 1] == allQuestions[i].rightAnswer) {
                    addPoints.calcPoints(allQuestions[i].points);
                    this.numberOfRight++;
                    $("#" + (i+1)).css("background-color", "green");
                } else {
                    addPoints.calcPoints(0);
                    this.numberOfWrong++;
                    $("#" + (i+1)).css("background-color", "red")
                }
            }
        }
        
        $("<span>").appendTo(".testEnded").text("Решивте " + this.numberOfRight * 10  + "% од тестот")
        $("<span>").appendTo(".testEnded").text("Имате: " + this.numberOfRight + " точно одговорени, " + this.numberOfWrong + " неточно одговорени и " + this.numberNotAnswered + " не одговорени прашања" );
        $("<span>").appendTo(".testEnded").text("Освоивте " + addPoints.startPoints + " поени")
    }
    $("#testEnded").on("click", this.correctAnswer);



    this.countClick = function () {
        var count = 0;
        $('#next').click(function () {
            count += 1;
            if (count == 9) {
                $('#next').css("display", "none");
                $('#testEnded').css("display", "flex")
            }
        });
    };
    this.countClick()
}


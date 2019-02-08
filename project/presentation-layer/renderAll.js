function RenderAll() {
    this.renderStart = function () {
        $("#mainTest").show()
        $(".questionsContainer").hide()
        $(".loginForm").hide();
        $(".testEnded").hide();
    }

    this.renderStart();

    this.renderLogin = function () {
        $("#mainTest").hide();
        $(".loginForm").show();
        $(".questionsContainer").hide();
        $(".testEnded").hide();
        return false;
    }

    this.renederQuestions = function () {
        $("#mainTest").hide();
        $(".loginForm").hide();
        $(".questionsContainer").stop().show();
        $(".testEnded").hide();
        return false;
    }

    this.testEnded = function () {
        $("#mainTest").hide();
        $(".loginForm").hide();
        $(".questionsContainer").hide();
        $(".testEnded").show();
        return false;
    }

}


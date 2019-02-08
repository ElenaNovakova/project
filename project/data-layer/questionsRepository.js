function QuestionRepo() {
    var questionsBase = new QuestionsBase()

    this.generateQuestions = function () {
        this.givenQuestion = questionsBase.giveQuestion();
        return this.givenQuestion;
    }

    this.generateQuestions()
}


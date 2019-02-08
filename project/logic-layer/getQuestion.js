function GetQuestion (){
    var test = new QuestionsBase();
    this.generateQuestion = function () {
        this.givenQuestion = test.giveQuestion();
        return this.givenQuestion;
    }
}
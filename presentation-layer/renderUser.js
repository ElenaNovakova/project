function RenderUser () {
    var login = new LoginLogic();
    var userRender = login.getInputs() 
    
    $("<div>").appendTo(".questionsContainer").addClass("userInputs").html(userRender.firstName + " "
    + userRender.lastName + ", "
    + userRender.grade + " одделение")
}


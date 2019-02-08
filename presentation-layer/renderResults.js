function RenderResults(){
    this.render = function(){
        $("<div>").appendTo("#mainWrap").addClass("testEnded");
        $("<h1>").appendTo(".testEnded").text("Го завршивте тестот");
        $("<div>").appendTo(".testEnded").addClass("answerResults")
        $("<div>").appendTo(".testEnded").addClass("colorContainer");
        $("<span>").appendTo(".testEnded").text("Вашите одговори: ")
        for (let i = 1; i <= 10; i++) {
            var index = i;
            $("<div>").appendTo(".colorContainer").attr("id", index).addClass("colorOfQuestion").html($("<span>").text("Прашање " + index + ": "));
        }
    }
    this.render()
}
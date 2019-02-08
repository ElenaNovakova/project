function renderHome() {
    // $("<div>").appendTo("#mainWrap").attr("id", "main-start");
    $("<div>").appendTo("#main-start").addClass("img-slaidshow");
    $("<div>").appendTo("#main-start").addClass("dots");
    for (let i = 0; i < 7; i++) {
        $("<div>").appendTo(".dot").addClass("dot");  
    }

}

renderHome()
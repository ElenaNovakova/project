function Header(){
    $("<div>").addClass('headerWrap').appendTo("#mainWrap");

    $("<div>").addClass('logoWrap').appendTo(".headerWrap");
    $("<img>").appendTo(".logoWrap").attr("src", "img/logo.png");
    $("<h2>").appendTo(".logoWrap").text("Математика");

    $("<nav>").appendTo(".headerWrap");
    $("<a>").appendTo("nav").addClass('home')
    $("<i>").appendTo(".home").addClass("fas fa-home fa-lg home")
    $("<a>").appendTo("nav").text("Тест").attr("id", "test")
    $("<a>").appendTo("nav").text("Магичен квадрат").attr("id", "toMagic")
    $("<a>").appendTo("nav").text("Ератостеново ситo")
    $("<a>").appendTo("nav").text("Занимливи факти").attr("href", "funfacts.html");


    /**********Home *******/

    $(".home").on("click", function(){
        $("#mainTest").hide()
        $("#main-start").show();
        $("#magic").hide();
        $(".img-slideshow").show()
        RenderStart()
   
    })

    $("#test").on("click", function(){
        $("#mainTest").show()
        $("#main-start").hide()
        $("#magic").hide();
        $(".img-slideshow").hide()
    });

    $("#toMagic").one("click", function(){
        $("#mainTest").hide()
        $("#main-start").hide()
        $("#magic").show()
        $(".img-slideshow").hide()


        RenderMagic();

        $("#btn").on("click", function(){
            var magic = new Magic()
        });
    })
}
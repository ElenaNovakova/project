function RenderMagic(){

    $("<p>").appendTo("#magic").text("Сумата на сите дијагонали, редици и колони треба да биде 24")

    $("<div>").appendTo("#magic").addClass("magicSquare");

    $("<div>").appendTo(".magicSquare").addClass("one")
    $("<input>").appendTo(".one").attr("id", "1x1");
    
    $("<div>").appendTo(".magicSquare").addClass("two")
    $("<input>").appendTo(".two").attr("id", "1x2");

    $("<div>").appendTo(".magicSquare").text("10")
    $("<div>").appendTo(".magicSquare").text("15")
    $("<div>").appendTo(".magicSquare").text("8")

    $("<div>").appendTo(".magicSquare").addClass("six")
    $("<input>").appendTo(".six").attr("id", "2x3");

    $("<div>").appendTo(".magicSquare").addClass("seven")
    $("<input>").appendTo(".seven").attr("id", "3x1");

    $("<div>").appendTo(".magicSquare").addClass("eight")
    $("<input>").appendTo(".eight").attr("id", "3x2");

    $("<div>").appendTo(".magicSquare").addClass("nine")
    $("<input>").appendTo(".nine").attr("id", "3x3");


    $("<button>").appendTo("#magic").attr("id", "btn").text("Провери го решението");


}

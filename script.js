function RenderStart() {
    $("<img>").attr("src", "img/img1.jpg").attr("alt","img1").appendTo(".img-slideshow").attr("id", "img1").css("opacity", "1")


for (let i = 2; i <= 8; i++){
    setInterval(function(){
     
        $(".img-slideshow").empty()
    $("<img>").attr("src", "img/img" + i + ".jpg").attr("alt","img2").appendTo(".img-slideshow").css("opacity", "1")
        
    $(".dots span:nth-child("+ i +")").css("background-color","#F30659")
 
    $(".dots span:not(:nth-child("+ i +")").css("background-color","#bbb" )

    },5000*i)
}
}




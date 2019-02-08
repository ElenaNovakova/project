$("<img>").attr("src", "img/img1.jpg").attr("alt","img1").appendTo(".img-slaidshow").attr("id", "img1").css("opacity", "1")


for (let i = 2; i <= 8; i++){
    setInterval(function(){
     
        $(".img-slaidshow").empty()
    $("<img>").attr("src", "img/img" + i + ".jpg").attr("alt","img2").appendTo(".img-slaidshow").css("opacity", "1")
        
    $(".dots span:nth-child("+ i +")").css("background-color","#F30659")
 
    $(".dots span:not(:nth-child("+ i +")").css("background-color","#bbb" )

    },5000*i)
}



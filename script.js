$(".spell-one").click(function(){
    $(".spell-one").hide();
    $(".rabbit").fadeIn();
    $("body").css("background-color","pink");
    $("button").css("background-color","pink");
    $("body").css("color","white");
    $(".spell-three").text("Abracadabra");
    $(".spell-one1").show();
    $(".spell-one1").css("color","white");
    $(".spell-one1").css("border","3px inset white");
    $(".spell-one").css("color","white");
    $(".spell-one").css("border","3px inset white");
    
});
$(".spell-one1").click(function(){
     $(".spell-one1").hide();
    $(".rabbit").fadeOut();
    $("body").css("background-color","pink");
    $("button").css("background-color","pink");
    $("body").css("color","white");
    $(".spell-one").show();
     $(".spell-one1").css("color","white");
    $(".spell-one1").css("border","3px inset white");
    $(".spell-one").css("color","white");
    $(".spell-one").css("border","3px inset white");
});

$(".spell-two").click(function(){
    $(".wizard").fadeOut();
    $("body").css("background-color","blue");
    $(".wizard").fadeIn();
    $("button").css("background-color","blue");
    $("body").css("color","white");
    $(".spell-three").text("Abracadabra");
});

$(".spell-three").dblclick(function(){
    $("p").text("HocusPocus123");
    $(".spell-three").text("OOPs! my password!!!just kidding");
    $("body").css("background-color","red");
    $("button").css("background-color","red");
    $("body").css("color","white");
});
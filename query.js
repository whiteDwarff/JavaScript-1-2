$(document).ready(function(){
    $("#btnOFF").click(function(){
        // (transition, callback)
        $("li").slideUp(); 
        // $("li").fadeOut(); 
        // $("li").hide(500); 
    });
    //----------------------------------
    $("#btnON").click(function(){
        $("li").slideDown(); 
        // $("li").fadeIn();
        // $("li").show(500);
    });
    //----------------------------------
    $("#btnToggle").click(function(){
        $("li").slideToggle(); 
        // $("li").fadeToggle(300);
        // $("li").Toggle(500);
    });
});
//=====================================
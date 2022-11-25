//--------------------------------
//function zone
function gid(id){
    return document.getElementById(id)
}
//--------------------------------
//event handler zone
function mouseOver(ev){
    ev.stopPropagation();
    $(this).css("background-color","yellow")
    gid("eventLog").innerHTML += `mouse OVER ${this.id}<br>`
}
function mouseOut(ev){
    ev.stopPropagation();
    $(this).css("background-color","white")
    gid("eventLog").innerHTML += `mouse OUT ${this.id}<br>`
}
function mouseEnter(){
    $(this).css("border", "2px solid blue");
    gid("eventLog").innerHTML += `mouse ENTER ${this.id}<br>`
}
function mouseLeave(){
    $(this).css("border", "1px solid black");
    gid("eventLog").innerHTML += `mouse LEAVE ${this.id}<br>`
}
function clearP(){
    $(this).html("");
}
//--------------------------------
window.onload = function(){
    //jQuery style
    $("div").mouseover(mouseOver);
    $("div").mouseout(mouseOut);
    $("div").mouseenter(mouseEnter);
    $("div").mouseleave(mouseLeave);
    $("#eventLog").dblclick(clearP);


    //----------------------------------------------
    // let divArray = document.querySelectorAll("div");
    // for(let aDiv of divArray){
    //     aDiv.addEventListener("mouseover", mouseOver)
    //     aDiv.addEventListener("mouseout", mouseOut)
    // }
}
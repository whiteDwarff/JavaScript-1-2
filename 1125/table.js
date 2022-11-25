// function zone
function gid(id) {
    return document.getElementById(id);
}

// newWord를 포함하는 행을 새로 생성하여 table 마지막에 추가한다.
function appendRow(newWord){
    let myTbody = gid("myTbody");
    // 추가할 새 행을 생성.
    let newRow = myTbody.insertRow(myTbody.rows.length); // length = array의 index + 1의 값

    // 새 행 newRow에 두개의 새 컬럼을 생성
    let cell0 = newRow.insertCell(0);
    let cell1 = newRow.insertCell(1);

    // 새로 생성된 cell에 내용을 추가한다.
    cell0.innerHTML = newWord;
    cell1.innerHTML = newWord.length;
}

// ---------------------------------------------
// event handlers zone
function onkeyDown(ev) {
    // event가 실행되면 어떤 키를 눌렀는지 확인 가능(키보드의 ~)
    if(ev.keyCode == '13'){ // enter 키를 눌렀으면 ~
        // jQuery = .val()  /   js     = .value()
        //gid("eventLog").innerHTML += $("#textInput").val() + ", ";
        // input의 내용 clear 
        appendRow($("#textInput").val());
        $("#textInput").val("");
    }
}



// ---------------------------------------------
window.onload = function() {
    $("#textInput").keydown(onkeyDown);







}


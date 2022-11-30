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
    cell0.addEventListener("click", insertFront);
    cell1.innerHTML = newWord.length;
    cell1.addEventListener("click", deleteRow);
}

// ---------------------------------------------
// 어떤 행의 cell 0를 클릭하면 클릭한 행의 앞에 새로운 cell을 추가한다.
function insertFront() {
    let newWord = $("#textInput").val();
    newWord = newWord.trim();
    
    if(newWord.length == 0) { return; }
    // input의 내용 clear
    $("#textInput").val("");
    
    let myTbody = gid("myTbody");
    // 1. click한 cell을 포함하는 행의 index를 확인한다.
    // cell을 포함하는 행 (td)  tbody -> tr -> td (부모 요소를 확인 가능) 
    let rowIndex = this.parentNode.rowIndex - 1;
    let newRow = myTbody.insertRow(rowIndex);
    
    // 새 행 newRow에 두개의 새 컬럼을 생성
    let cell0 = newRow.insertCell(0);
    let cell1 = newRow.insertCell(1);
    // 새로 생성된 cell에 내용을 추가한다.
    cell0.innerHTML = newWord;
    cell0.addEventListener("click", insertFront);
    cell1.innerHTML = newWord.length;
    cell1.addEventListener("click", deleteRow);
    
}

// ---------------------------------------------
// click한 cell을 포함하는 행을 삭제한다.
function deleteRow() {
    let targetRow = this.parentNode.rowIndex - 1;
    gid("myTbody").deleteRow(targetRow);
}
// ---------------------------------------------
// event handlers zone
function onkeyDown(ev) {
    // event가 실행되면 어떤 키를 눌렀는지 확인 가능(키보드의 ~)
    if(ev.keyCode == '13'){ // enter 키를 눌렀으면 ~
        // jQuery = .val()  /   js     = .value()
        //gid("eventLog").innerHTML += $("#textInput").val() + ", ";
        let str = $("#textInput").val();
        str = str.trim();
        
        if(str.length > 0) {
            appendRow($("#textInput").val());
        } 
        // input의 내용 clear
        $("#textInput").val("");

    }
}
// ---------------------------------------------
window.onload = function() {
    $("#textInput").keydown(onkeyDown);


}



// 단독 존재하는 함수 : this 사용 x

// 이벤트 핸들러     : this 사용


// table의 index = 1부터 시작
// 배열에서의 Index는 0부터 시작
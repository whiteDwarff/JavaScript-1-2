// 전역변수 
let dragingCard = null;  // draging 시작한 객체
let dragOverCard = null; // draging 카드가 방문중인  객체(카드)
//-------------------------------------------------------------
// card Event Handlers 

// card를 잡고 드레깅 시작할 때 처리할 이벤트 핸들러
function onDragStartCard(ev) {
    // dragging 중인 자신(this) 등록
    dragingCard = this;
    // classList : 객체에 css class를 추가.
    this.classList.add("draggingCard");
}
function onDragEndCard(ev) {
    ev.preventDefault();
    // dragging 중인 객체 변수 해제
    dragingCard = null;
    // draggingCard class 제거
    this.classList.remove("draggingCard");
    // dragOver가 발생한 카드 위에서 drop이 발생 했다면...
    if(dragOverCard){
        // null = 거짓, if는 참인 조건이므로 값이 남아있다면 ~ 조건이 성립될 때
        dragOverCard.classList.remove("overCard");
        dragOverCard = null;
    }
}
// card가 다른 card위에 올라갈 때의 Event handler
function onDragOverCard(ev) {
    ev.preventDefault();
    dragOverCard = this;
    this.classList.add("overCard");
}
// card가 다른 card위에서 벗어날 때의 Event handler
function onDragLeaveCard(ev) {
    ev.preventDefault();
    dragOverCard = null;
    this.classList.remove("overCard");
}
//----------------------------------------------------------cardEvent
// box event handling
function onDragOverBox(ev) {
    // 브라우저가 기본적으로 처리하는 코드를 배제
    ev.preventDefault();
    this.classList.add("overBox");
}
function onDragLeaveBox(ev) {
    ev.preventDefault();
    this.classList.remove("overBox");
}

// card가 box를 이동할 때 반응
function onDropBox(ev) {
    this.appendChild(dragingCard);
    this.classList.remove("overBox");
}
//---------------------------------------------------------boxEvent
window.onload = function() {
    // card 객체에 이벤트 핸들러를 연결
    let cards = document.querySelectorAll(".card");
    for(let card of cards) {
        card.addEventListener("dragstart", onDragStartCard);
        card.addEventListener("dragend", onDragEndCard);
        card.addEventListener("dragover", onDragOverCard);
        card.addEventListener("dragleave", onDragLeaveCard);
    }
    // box 객체에 이벤트 핸들러 연결
    let boxs = document.querySelectorAll(".box");
    for(let box of boxs) {
        box.addEventListener("dragover", onDragOverBox);
        box.addEventListener("dragleave", onDragLeaveBox);
        box.addEventListener("drop", onDropBox);
    }

}
//-------------------------------------------------------------

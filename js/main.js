/* click 이벤트*/
document.addEventListener("DOMContentLoaded", () => {
  const menuClick = document.querySelectorAll("#menu li a");

  menuClick.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.add("shake");
      setTimeout(() => {
        item.classList.remove("shake");
      }, 500);
    });
  });
});

/* 이벤트 후 opacity효과 */
document.addEventListener("DOMContentLoaded", () => {
  const clickMessage = document.getElementById("click-message");
  const mainContent = document.getElementById("main-content");
  const abutme = document.getElementById("abutme");

  clickMessage.addEventListener("click", () => {
    clickMessage.style.display = "none";
    mainContent.style.display = "block";

    setTimeout(() => {
      abutme.style.opacity = 1;
    }, 10);
  });
});

/* 타이핑 효과 */
const txtWrap = document.querySelector(".typing");
const txtString = "안녕하세요! \n 주니어 프론트엔드 개발자 김하늘 입니다.";
const txtSpeed = 100;
const txtDelay = 2000;
let txtIndex = 0;
let typeCotrol = true;

function typingEvent() {
  if (typeCotrol === true) {
    let txtNow = txtString[txtIndex++];
    txtWrap.innerHTML += txtNow === "\n" ? "<br>" : txtNow;
    console.log(txtIndex);
    if (txtIndex >= txtString.length) {
      txtIndex = 0;
      typeCotrol = false;
    }
  } else {
    clearInterval(setTyping);
    setTimeout(function () {
      txtWrap.innerHTML = "";
      typeCotrol = true;
      setTyping = setInterval(typingEvent, txtSpeed);
    }, txtDelay);
  }
}
let setTyping = setInterval(typingEvent, txtSpeed);

/* 모달 */
const modalBtn = document.querySelector("#projects-li-btn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".closeModal");
const modaloverlay = document.querySelector(".modal-overlay");

modalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modaloverlay.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// const modalBtns = document.querySelectorAll("button[id^='projects-li-btn']");
// const modal = document.querySelector(".modal");
// const closeModal = document.querySelector(".closeModal");
// const modaloverlay = document.querySelector(".modal-overlay");
// const modalText = document.getElementById("modal-text");

// modalBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const btnId = btn.id;
//     const content = document.getElementById(`content-${btnId}`).innerHTML;
//     modalText.innerHTML = content;
//     modal.classList.remove("hidden");
//   });
// });

// closeModal.addEventListener("click", () => {
//   modal.classList.add("hidden");
// });

// modaloverlay.addEventListener("click", () => {
//   modal.classList.add("hidden");
// });

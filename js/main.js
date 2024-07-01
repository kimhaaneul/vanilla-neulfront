document.addEventListener("DOMContentLoaded", () => {
  const abutme = document.getElementById("abutme");
  const homeNav = document.getElementById("home-nav");
  homeNav.style.display = "flex";

  setTimeout(() => {
    abutme.style.opacity = 1;
  }, 10);
});

/* 네비바 이동 */
function scrollToSection(event, sectionId) {
  event.preventDefault();
  const section = document.getElementById(sectionId);
  window.scrollTo({
    top: section.offsetTop,
    behavior: "smooth",
  });
}

document
  .getElementById("profile-link")
  .addEventListener("click", function (event) {
    scrollToSection(event, "profile");
  });

document
  .getElementById("skills-link")
  .addEventListener("click", function (event) {
    scrollToSection(event, "skills");
  });

document
  .getElementById("projects-link")
  .addEventListener("click", function (event) {
    scrollToSection(event, "projects");
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
const modalBtns = document.querySelectorAll("button[id^='projects-li-btn']");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".closeModal");
const modaloverlay = document.querySelector(".modal-overlay");
const modalContentBox = document.getElementById("modal-content-box");

modalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const contentId = btn.getAttribute("data-content");
    const content = document.getElementById(contentId).innerHTML;
    modalContentBox.innerHTML = content;
    modal.classList.remove("hidden");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modaloverlay.addEventListener("click", () => {
  modal.classList.add("hidden");
});

const profileimg = document.querySelector("profile-img");

/* media screen max-width 430일때 개행용 */
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 430) {
    const profileH1 = document.getElementById("profile-h1");
    const profileP = document.getElementById("profile-p");

    profileH1.innerHTML = "꿈꾸는 프론트엔드 개발자 <br> 김하늘 입니다.";
    profileP.innerHTML =
      "개발이란 분야에서 새로운 기술에 도전하는 것을 두려워 하지 않고, <br> 변화에 수긍하며 어떠한 기술에서도 변화무쌍하게 <br> 적응할 수 있는 꿈꾸는 개발자가 되겠습니다.";
  }
});

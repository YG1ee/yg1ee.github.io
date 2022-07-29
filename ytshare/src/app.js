const iLink = document.querySelector("#input_link");
const oLink = document.querySelector("#result_link");
const btnShareYT = document.querySelector(".shareYT");
const btnRetryYT = document.querySelector(".retryYT");
const textResult = document.querySelector("#result");

const timestamp = document.querySelector(".timestamp");
const useTime = document.querySelector("#use_time");
const inputTime = document.querySelector(".time_input");

let flagAlready = 0;

let hideElem = (item) => {
  item.classList.add("hidden");
}

let showElem = (item) => {
  item.classList.remove("hidden");
}

let shareYT = () => {
  const yText = iLink.value;

  let hour = document.querySelector("#h").value;
  let min = document.querySelector("#m").value;
  let sec = document.querySelector("#s").value;

  if (hour.length === 0) hour = 0;
  if (min.length === 0) min = 0;
  if (sec.length === 0) sec = 0;

  hour = parseInt(hour);
  min = parseInt(min);
  sec = parseInt(sec);

  let tStamp = 0;
  if (
    !(hour === 0 && min === 0 && sec === 0) &&
    !(hour < 0 || min < 0 || sec < 0)
  )
    tStamp = hour * 3600 + min * 60 + sec;

  let linkPos = yText.indexOf("?v=");
  if (linkPos === -1) {
    if (useTime.checked) {
      if (tStamp !== 0) {
        linkPos = yText.indexOf("youtu.be/");
        flagAlready = 1;
      }
      else {
        if (yText.indexOf("?t=") !== -1) {
          linkPos = yText.indexOf("youtu.be/");
          flagAlready = 1;
        }
      }
    }
  }

  if (linkPos !== -1) {
    let shareLink = "https://youtu.be/" + yText.substr(linkPos + (flagAlready === 1 ? "youtu.be/".length : "?v=".length), 11);

    if (useTime.checked && (tStamp !== 0))
      shareLink += "?t=" + tStamp;

    if (navigator.share) {
      navigator
        .share({
          text: shareLink
        })
        .then(() => {
          textResult.innerText = "공유 완료 😎";
        })
        .catch((error) => {
          textResult.innerText = "공유 취소 😲";
        });
    } else {
      navigator.clipboard.writeText(shareLink);

      oLink.innerText = shareLink;
      textResult.innerText = "클립보드에 복사 완료 😎";
    }

    showElem(oLink);
  }
  else {
    hideElem(btnShareYT);
    if (yText.search("youtu.be") !== -1)
      textResult.innerText = "이미 변환이 완료된 링크네요 😄";
    else
      textResult.innerText = "유튜브 영상 링크가 아닌 것 같습니다 🙄";
  }

  hideElem(inputTime);
  hideElem(iLink);
  hideElem(timestamp);
  showElem(btnRetryYT);
  showElem(textResult);
};

let retryYT = () => {
  showElem(iLink);
  showElem(timestamp);
  showElem(btnShareYT);
  hideElem(btnRetryYT);
  iLink.value = "";
  oLink.innerText = "";
  textResult.innerText = "";
  useTime.checked = false;
  document.querySelector("#h").value = 0;
  document.querySelector("#m").value = 0;
  document.querySelector("#s").value = 0;
};

let showTime = () => {
  if (useTime.checked)
    showElem(inputTime);
  else
    hideElem(inputTime);
};

btnShareYT.addEventListener("click", shareYT);
btnRetryYT.addEventListener("click", retryYT);
useTime.addEventListener("click", showTime);

let checkboxes = document.querySelectorAll('input[type="checkbox"]');
// On document ready event, set the initial states of the checkboxes
document.addEventListener('DOMContentLoaded', function () {
  checkboxes.forEach(function (checkbox) {
    this.checked = false;
  });
});

// // When checkbox state is changed, save it to the localStorage
// checkboxes.forEach(function (checkbox) {
//   checkbox.addEventListener('change', function () {
//     window.localStorage.setItem(this.id, this.value);
//   });
// });
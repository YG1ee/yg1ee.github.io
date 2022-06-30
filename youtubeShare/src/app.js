const iLink = document.querySelector("#input_link");
const oLink = document.querySelector("#result_link");
const btnShareYT = document.querySelector(".shareYT");
const btnRetryYT = document.querySelector(".retryYT");
const textResult = document.querySelector("#result");

let addHidden = (item) => {
  item.classList.add("hidden");
}

let rmHidden = (item) => {
  item.classList.remove("hidden");
}

let shareYT = () => {
  const yText = iLink.value;

  const linkPos = yText.indexOf("?v=");
  if (linkPos != -1) {
    const shareLink = "https://youtu.be/" + yText.substr(linkPos + 3, 11);

    if (navigator.share) {
      navigator
        .share({
          text: shareLink
        })
        .then(() => {
          textResult.innerText = "공유 완료!";
        })
        .catch((error) => {
          textResult.innerText = "공유 취소";
        });
    } else {
      navigator.clipboard.writeText(shareLink);

      oLink.innerText = shareLink;
      textResult.innerText = "클립보드에 복사 완료! 😎";
    }
    rmHidden(oLink);
  }
  else {
    addHidden(btnShareYT);
    if (yText.indexOf("https://youtu.be/") != -1 && (yText.length == 28))
      textResult.innerText = "이미 변환이 완료된 링크네요! 😄";
    else
      textResult.innerText = "유튜브 링크가 아닌 것 같습니다 🙄";
  }
  addHidden(iLink);
  rmHidden(btnRetryYT);
  rmHidden(textResult);
};

let retryYT = () => {
  rmHidden(iLink);
  iLink.value = "";
  oLink.innerText = "";
  textResult.innerText = "";
  rmHidden(btnShareYT);
  addHidden(btnRetryYT);
};

btnShareYT.addEventListener("click", shareYT);
btnRetryYT.addEventListener("click", retryYT);
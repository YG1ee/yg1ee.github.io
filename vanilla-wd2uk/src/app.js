let result = "";
let bit = 0;
const btnShareUK = document.querySelector(".shareUK");
const btnRetryUK = document.querySelector(".retryUK");
const btnPrintUK = document.querySelector(".printUK");
const textResult = document.querySelector(".output_result");
const textState = document.querySelector(".state_message");
const textWordl = document.getElementById("wordl");

const togl = document.querySelectorAll(".toggling");

let printUK = () => {
  togl.forEach((item) => item.classList.toggle("hidden"));

  const wordl = textWordl.value;
  if (wordl.length !== 0) {
    let wordlFlag = false; // Wordle이 맞는지 여부
    let type = 0b00; // type이 혼용되었는지 bitmask

    for (let i = 0; i < wordl.length; i++) {
      // 색 있는 사각형 (이모지)
      if (wordl[i] === "\uD83D") {
        switch (wordl[i + 1]) {
          // wrong spot
          case "\uDFE6": // 🟦
          case "\uDFE8": // 🟨
            result += "🟨";
            wordlFlag = true;
            break;
          // correct spot
          case "\uDFE7": // 🟧
          case "\uDFE9": // 🟩
            result += "🟦";
            wordlFlag = true;
            break;
          default:
            result += wordl[i];
            continue;
        }

        switch (wordl[i + 1]) {
          case "\uDFE6": // 🟦
          case "\uDFE7": // 🟧
            type |= 0b10;
            break;
          case "\uDFE8": // 🟨
          case "\uDFE9": // 🟩
            type |= 0b01;
            break;
          default:
            result += wordl[i];
            continue;
        }
        // 이모지는 2자로 이루어짐.
        i++;
      }
      // not in any spot
      // 빈 사각형과 검은 사각형은 이모지가 아님.
      else if (wordl[i] === "⬜" || wordl[i] === "⬛") {
        result += "⬛";
        wordlFlag = true;
      }
      // plain character
      else result += wordl[i];
    }

    if (wordlFlag && type !== 0b11) {
      textResult.innerText = result;
      btnShareUK.classList.remove("hidden");
    } else {
      textResult.innerText =
        "Wordle의 결과가 아닌 것 같습니다 :(\n";
    }
  } else {
    textResult.innerText =
      "값을 입력해주세요 :(";
  }

  result = "";
};

let retryUK = () => {
  togl.forEach((item) => item.classList.toggle("hidden"));

  btnShareUK.classList.add("hidden");
  textWordl.value = "";
  bit = 0;
};

let shareUK = () => {
  if (navigator.share) {
    navigator
      .share({
        text: textResult.innerText
      })
      .then(() => textState.innerText = "공유 완료 😎")
      .catch((error) => textState.innerText = "공유 취소 😲")
  } else {
    const res = textResult.innerText;
    navigator.clipboard.writeText(res);
    if (bit == 0)
      textState.innerText = "클립보드에 복사 완료 😎";
    else
      textState.innerText = "클립보드에 다시 복사 완료 😎";
    bit ^= 1;
  }
};

btnPrintUK.addEventListener("click", printUK);
btnShareUK.addEventListener("click", shareUK);
btnRetryUK.addEventListener("click", retryUK);

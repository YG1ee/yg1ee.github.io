let result = "";

const togl = document.querySelectorAll(".toggling");
const shareButton = document.querySelector(".success");

printUK = () => {
  const wordl = document.getElementById("wordl").value;
  let wordlFlag = false; // Wordle이 맞는지 여부
  let type = 0; // type이 혼용되었는지 bitmask
  let count = 0;
  let idx = 0;

  for (let i = 0; i < wordl.length; i++) {
    if (count < 1) {
      if (wordl[i] == "\n") count += 1;
      result += wordl[i];
      idx = i + 1;
    } else {
      // 색 있는 사각형 (이모지)
      if (wordl[i] == "\uD83D") {
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
        }
        // 이모지는 2자로 이루어짐.
        i++;
      }
      // not in any spot
      // 빈 사각형과 검은 사각형은 이모지가 아님.
      else if (wordl[i] == "⬜") {
        result += "⬛";
        wordlFlag = true;
      }
      // plain character
      else result += wordl[i];
    }
  }

  if (wordlFlag && (type != 0b11)) {
    document.querySelector(".output_result").innerText = result;
    document.querySelector(".success").classList.remove("hidden");
  } else {
    document.querySelector(".output_result").innerText =
      "Wordle의 결과가 아닌 것 같습니다 :(\n";
  }

  togl.forEach(function (item) {
    item.classList.toggle("hidden");
  });

  document.getElementById("wordl").value = "";
  result = "";
};

retryUK = () => {
  togl.forEach(function (item) {
    item.classList.toggle("hidden");
  });
  document.querySelector(".success").classList.add("hidden");
};

shareUK = () => {
  if (navigator.share) {
    navigator.share({
      text: result
    });
  }
  else {
    console.log("Well that didn't work...");
    const res = document.querySelector(".output_result").innerText;
    navigator.clipboard.writeText(res);
  }
};

// shareButton.addEventListener("click", event => {
//   if (navigator.share) {
//     // navigator.share({
//     //   text: result
//     // });
//   }
//   else {
//     console.log("Well that didn't work...");
//     const res = document.querySelector(".output_result").innerText;
//     navigator.clipboard.writeText(res);
//   }
// });

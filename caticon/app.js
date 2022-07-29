// 1~98: 냥장콘final
// 99~135: 냥장콘last
// 136~201: 냥장콘bonus

import { images, titles, descriptions, cacao_images } from "./image_link.js"

let COUNT = images.length;
let table = document.querySelector("table");

for (let i = 1; i <= COUNT; i += 5) {
  let tr1 = document.createElement("tr");
  tr1.setAttribute("class", "con_number");
  for (let j = i; j < i + 5 && j <= COUNT; j++) {
    let td = document.createElement("td");
    td.textContent = j;
    tr1.appendChild(td);
  }

  let tr2 = document.createElement("tr");
  tr2.setAttribute("class", "con_picture");
  for (let j = i; j < i + 5 && j <= COUNT; j++) {
    let td = document.createElement("td");

    let a = document.createElement("a");
    a.setAttribute("id", `icon_${String(j).padStart(3, 0)}`);
    a.setAttribute("href", "javascript:;");

    let img = document.createElement("img");
    img.setAttribute("src", images[j - 1]);
    img.setAttribute("title", titles[j - 1]);

    a.appendChild(img);
    td.appendChild(a);
    tr2.appendChild(td);
  }

  let tr3 = document.createElement("tr");
  tr3.setAttribute("class", "con_desc");
  for (let j = i; j < i + 5 && j <= COUNT; j++) {
    let td = document.createElement("td");
    // td.textContent = descriptions[j - 1];
    td.innerHTML = descriptions[j - 1];
    tr3.appendChild(td);
  }

  let tr4 = document.createElement("tr");
  tr4.setAttribute("style", "height:10px");

  table.appendChild(tr1);
  table.appendChild(tr2);
  table.appendChild(tr3);
  table.appendChild(tr4);
}

Kakao.init("32ac78b0b5d2fe39116efb22d978c462");

for (let i = 1; i <= COUNT; i++) {
  Kakao.Link.createDefaultButton({
    container: `#icon_${String(i).padStart(3, 0)}`,
    objectType: "feed",
    content: {
      title: "고양이콘 😺",
      imageUrl: cacao_images[i - 1],
      link: {
        mobileWebUrl: "http://yg1ee.github.io/caticon",
        webUrl: "http://yg1ee.github.io/caticon",
      },
    },
    buttons: [{
      title: '냥냥하게 고양이콘 쓰기',
      link: {
        mobileWebUrl: 'http://yg1ee.github.io/caticon',
        webUrl: 'http://yg1ee.github.io/caticon'
      }
    }]
  });
}

// 냥장콘 final, last 200 https://imgur.com/a/LXVAYSa
// 냥장콘 bonus 200 https://imgur.com/a/FYlKndl

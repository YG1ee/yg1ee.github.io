import images from "obj.js"
import titles from "obj.js"
import descriptions from "obj.js"

table = document.querySelector("table");

COUNT = 136;

for (let i = 1; i <= COUNT; i += 5) {
    tr1 = document.createElement("tr"); tr1.setAttribute("class", "con_number");
    for (let j = i; (j < i + 5) && (j <= COUNT); j++) {
        td = document.createElement("td");
        td.textContent = j;
        tr1.appendChild(td);
    }

    tr2 = document.createElement("tr"); tr2.setAttribute("class", "con_picture");
    for (let j = i; (j < i + 5) && (j <= COUNT); j++) {
        td = document.createElement("td");

        a = document.createElement("a");
        a.setAttribute("id", `icon_${String(j).padStart(3, 0)}`);
        a.setAttribute("href", "javascript:;");

        img = document.createElement("img");
        img.setAttribute("src", images[j - 1]);
        img.setAttribute("title", titles[j - 1]);

        a.appendChild(img);
        td.appendChild(a);
        tr2.appendChild(td)
    }

    tr3 = document.createElement("tr"); tr3.setAttribute("class", "con_desc");
    for (let j = i; (j < i + 5) && (j <= COUNT); j++) {
        td = document.createElement("td");
        // td.textContent = descriptions[j - 1];
        td.innerHTML = descriptions[j - 1];
        tr3.appendChild(td);
    }
    
    tr4 = document.createElement("tr"); tr4.setAttribute("style", "height:10px");

    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);
    table.appendChild(tr4);
}

hello = document.querySelector("tr");

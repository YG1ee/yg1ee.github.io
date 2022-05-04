let result = "";

printUK = () => {
	const wordl = document.getElementById('wordl').value;
	let count = 0; let idx = 0;

	for (let i = 0; i < wordl.length; i++) {
		if (count < 1) {
			if (wordl[i] == '\n') count += 1;
			result += wordl[i];
			idx = i + 1;
		}
		else {
			// 색 있는 사각형 (이모지)
			if (wordl[i] == '\uD83D') {
				switch (wordl[i + 1]) {
					// wrong spot
					case '\uDFE6': // 🟦
					case '\uDFE8': // 🟨
						result += '🟨';
						break;
					// correct spot
					case '\uDFE7': // 🟧
					case '\uDFE9': // 🟩
						result += '🟦';
						break;
				}
				// 이모지는 2자로 이루어짐.
				i++;
			}
			// not in any spot
			// 빈 사각형과 검은 사각형은 이모지가 아님.
			else if (wordl[i] == '⬜')
				result += '⬛';
			// plain character
			else
				result += wordl[i];
		}
	}

	document.getElementById("bye").style.display = "none";
	// document.getElementById("hi").style.display = "block";
	document.getElementById("result").innerText = result;
}

shareUK = () => {
	// document.getElementById("result").innerText = result;
}

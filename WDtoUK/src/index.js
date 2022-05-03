function printUK() {
	const wordl = document.getElementById('wordl').value;
	let result = ""; let count = 0; let idx = 0;

	for (let i = 0; i < wordl.length; i++) {
		if (count < 1) {
			if (wordl[i] == '\n') count += 1;
			result += wordl[i];
			idx = i + 1;
		}
		else {
			// colored square
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
				i++;
			}
			// not in any spot
			else if (wordl[i] == '⬜')
				result += '⬛';
			// plain character
			else
				result += wordl[i];
		}
	}

	document.getElementById("bye").style.display = 'none';
	document.getElementById("result").innerText = result;
}

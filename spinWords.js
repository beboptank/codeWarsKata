function spinWords(str) {
	var arr = [];
	var newStr = "";
	var revStr = "";
	var newArr = [];
	arr = str.split(" ");

	for (i = 0; i < arr.length; i++) {
		if (arr[i].length >= 5) {
			revStr = arr[i].split("").reverse().join("");
			newArr.push(revStr);
		} else {
			newArr.push(arr[i]);
		}
	}

	return newArr.join(" ");

}
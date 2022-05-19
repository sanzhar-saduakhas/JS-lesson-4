const concatStrings = (str1, separator) => {
	if (typeof str1 === 'string') {
		if (typeof separator !== 'string'){
			return (str2) => {
				if (typeof str2 === 'string') {
					return concatStrings(str1 + str2);
				} else {
					console.log(str1);
					return str1;
				}
			}
		} else {
			return (str2) => {
				if (typeof str2 === 'string') {
					return concatStrings(str1 + separator + str2 + separator);
				} else {
					console.log(str1);
					return str1;
				}
			}
		}
	} else {
		console.log(str1);
		return str1;
	}
}
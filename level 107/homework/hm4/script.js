// შექმენით ფუნქცია რომელიც არგუმენტად გადაცემულ ორობით სისტემაში მყოფ რიცხვს გადაიყვანს ათობით სისტემაში.

let func = (str) => {
	let res = 0
	let power = 0

	for(let i = str.length - 1; i >= 0; i--){
    let digit = str[i]
		if (digit === "1") {
			res += 2 ** power
		}
		power++
	}

	return res
}

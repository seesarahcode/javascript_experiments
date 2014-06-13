// Simple Javascript Exercises
// Exercises taken from:
// http://www.ling.gu.se/~lager/teaching/dialogue_systems%20II/labs/javascript.html


// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

function toTheMax(n1, n2) {
	if (n1 > n2) {
		return n1;
	} else {
		return n2;
	}
}

// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree(n1, n2, n3) {
	if (n1 > n2 && n1 > n3) {
		return n1;
	} else if (n2 > n1 && n2 > n3) {
		return n2;
	} else {
		return n3;
	}
}

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isItAVowel(char) {
	var vowels = ["a", "e", "i", "o", "u"]
	for (var i = 0; i < vowels.length; i++) {
		if (char == vowels[i]) {
			return true;
		}
	}
}

// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

function sum(array) {
	var total = 0;
	for (var i = 0; i < array.length; i++) {
		var total = total + array[i];
	}
	return total;
}

function multiply(array) {
	var total = 0;
	for (var i = 0; i < array.length; i++) {
		var total = total * array[i];
	}
	return total;
}

// Define a function reverse() that computes the reversal of a string. For example, reverse("Seattle") should return the string "elttaeS".

function reverse(string) {
	var s = string.split("");
	var reversed = [];
	for (var i = 0; i < string.length; i++) {
		var end = s.pop();
		reversed.push(end);
	}
	return reversed.join("");
}


// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

function findLongestWord(array) {
	var last_longest = "";
	for (var i = 0; i < array.length; i++) {
		var current = array[i];
		var word_length = current.length;
		if (word_length > last_longest.length ) {
			last_longest = array[i];
		}
	}
	return last_longest;
}

// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

function filterLongWords(array, i) {
	var longest = [];
	for (var n = 0; n < array.length; n++) {
		if (array[n].length > i) {
			longest.push(array[n]);
		}
	}
	return longest;
}

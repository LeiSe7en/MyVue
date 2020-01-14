/*
	Data structure :
	1、 

*/
var lengthOfLongestSubstring = function(s) {
    let arr = s.split(''), result = [], length = 0
    for (let i = 0; i < arr.length; i++) {
        result = []
        for (let j = i + 1; j < arr.length; j++) {
            if (result.includes(arr[j])) {
                break;
            }
            result.push(arr[j])
        }
        if (result.length > length) {
            length = result.length
        }
    }
    return length
};
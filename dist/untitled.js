let nums = '5 2 8 1 6 3 4 7'
let rules = ['R', 'L', 'L', 'R', 'L', 'L', 'R']
let length = rules.length 
 let groups = []
let map = {
  L: [],
  R: []
}
function getResult (arr, rules) {
  if (rules.length == 1) {
    return arr[rules[0]][0]
  }
  let newNum = [], newRules = rules.slice(map.L.length)
  for(let i = 0; i < nums.split(' ').length; i++){
    if (i%2 == 0) {
     map.L.push(nums.split(' ')[i])
    } else {
    map.R.push(nums.split(' ')[i])
    }
  }

  for (let j = 0; j < map.L.length; j++) {
    newNum.push(map[rules[j]][j]) 
  }
  getResult(newNum, newRules)
}


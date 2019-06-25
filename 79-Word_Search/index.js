/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  function dfs (ans, x, y, board, word) {
    const rowLen = board[0].length
    if (ans.result) return

    if (word === '') {
      ans.result = true
      return
    }

    if (x < 0 || y < 0 || x > board.length - 1 || y > rowLen - 1) {
      return
    }

    if (board[x][y] !== word[0]) {
      return
    } else {
      let value = board[x][y]
      board[x][y] = null
      const newWord = word.slice(1)
      dfs(ans, x - 1, y, board, newWord)
      dfs(ans, x + 1, y, board, newWord)
      dfs(ans, x, y - 1, board, newWord)
      dfs(ans, x, y + 1, board, newWord)
      board[x][y] = value
    }
  }

  const ans = {
    result: false
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      dfs(ans, i, j, board, word)
    }
  }

  return ans.result
}
function doneOrNot(board){
  let col1 = 0
  let col2 = 0
  let col3 = 0
  let col4 = 0
  let col5 = 0
  let col6 = 0
  let col7 = 0
  let col8 = 0
  let col9 = 0
  for (let i = 0; i < board.length; i++) {
    col1 += board[i][0]
    col2 += board[i][1]
    col3 += board[i][2]
    col4 += board[i][3]
    col5 += board[i][4]
    col6 += board[i][5]
    col7 += board[i][6]
    col8 += board[i][7]
    col9 += board[i][8]
  }
  return col1 === 45 &&
    col2 === 45 &&
    col3 === 45 &&
    col4 === 45 &&
    col5 === 45 &&
    col6 === 45 &&
    col7 === 45 &&
    col8 === 45 &&
    col9 === 45 &&
    board[7][8] != board[8][7]
    ? "Finished!"
    : "Try again!"
}
// If every row adds up to 45 (1+2+3+4+5+6+7+8+9) and corner check, return finished, else

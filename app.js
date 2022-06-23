const squares = document.querySelectorAll(".game .square ");
const title = document.getElementById("title");
let turn = "x";
function endGame(num1, num2, num3) {
  squares[num1].style.backgroundColor = "#171c22";
  squares[num2].style.backgroundColor = "#171c22";
  squares[num3].style.backgroundColor = "#171c22";
  title.innerHTML = `Player <span>${squares[num1].innerHTML}</span> won the game!`;
}
function enable() {
  return (document.querySelector(".game .container").style.zIndex = "-1");
}
function draw(num) {
  return squares[num].innerHTML != "";
}
function winner() {
  if (
    squares[0].innerHTML == squares[1].innerHTML &&
    squares[1].innerHTML == squares[2].innerHTML &&
    squares[2].innerHTML != ""
  ) {
    endGame(0, 1, 2);
    enable();
  } else if (
    squares[3].innerHTML == squares[4].innerHTML &&
    squares[4].innerHTML == squares[5].innerHTML &&
    squares[5].innerHTML != ""
  ) {
    endGame(3, 4, 5);
    enable();
  } else if (
    squares[6].innerHTML == squares[7].innerHTML &&
    squares[7].innerHTML == squares[8].innerHTML &&
    squares[8].innerHTML != ""
  ) {
    endGame(6, 7, 8);
    enable();
  } else if (
    squares[0].innerHTML == squares[3].innerHTML &&
    squares[3].innerHTML == squares[6].innerHTML &&
    squares[6].innerHTML != ""
  ) {
    endGame(0, 3, 6);
    enable();
  } else if (
    squares[1].innerHTML == squares[4].innerHTML &&
    squares[4].innerHTML == squares[7].innerHTML &&
    squares[7].innerHTML != ""
  ) {
    endGame(1, 4, 7);
    enable();
  } else if (
    squares[2].innerHTML == squares[5].innerHTML &&
    squares[5].innerHTML == squares[8].innerHTML &&
    squares[8].innerHTML != ""
  ) {
    endGame(2, 5, 8);
    enable();
  } else if (
    squares[0].innerHTML == squares[4].innerHTML &&
    squares[4].innerHTML == squares[8].innerHTML &&
    squares[8].innerHTML != ""
  ) {
    endGame(0, 4, 8);
    enable();
  } else if (
    squares[2].innerHTML == squares[4].innerHTML &&
    squares[4].innerHTML == squares[6].innerHTML &&
    squares[6].innerHTML != ""
  ) {
    endGame(2, 4, 6);
    enable();
  } else if (
    draw(0) &&
    draw(1) &&
    draw(2) &&
    draw(3) &&
    draw(4) &&
    draw(5) &&
    draw(6) &&
    draw(7) &&
    draw(8)
  ) {
    title.innerHTML = ` <span>Oops! </span> draw`;
    enable();
  }
}
squares.forEach((element) => {
  element.addEventListener("click", (eo) => {
    if (turn == "x" && eo.target.innerHTML == "") {
      element.innerHTML = "X";
      turn = "o";
      title.innerHTML = `Player<span> O's</span> turn`;
    } else if (turn == "o" && eo.target.innerHTML == "") {
      element.innerHTML = "O";
      element.style.color = "#FA7E0A";
      turn = "x";
      title.innerHTML = `Player<span> X's</span> turn`;
    }
    winner();
  });
});

function restardTheGame() {
  return location.reload();
}

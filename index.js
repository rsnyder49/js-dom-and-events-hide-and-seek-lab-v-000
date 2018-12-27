function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('.ranked-list');
  
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i]) + n;
  }
}

function deepestChild() {
  let child = document.querySelectorAll('#grand-node div');
  return child.length - 1;
}
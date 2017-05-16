function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('.ranked-list');

  for(var i = 0, l = ranks.length; i < l; i++) {
    var lis = ranks[i].children;

    for(var x = 0; x < lis.length; x++) {
      var liNum = parseInt(lis[x].innerHTML);
      lis[x].innerHTML = liNum + n;
    }

  }

}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

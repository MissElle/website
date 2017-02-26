//Code taken from a stack overflow post -->http://stackoverflow.com/questions/21110130/protect-image-download//

$('img').mousedown(function (e) {
  if(e.button == 2) { // right click
    return false; // do nothing!
  }
}
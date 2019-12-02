function changefontweight(e) {
  var font = 'fontblod' + e;
  document.getElementById(font).style.fontWeight = '900';
  document.getElementById(font).style.color = '#2D2E7E';
}
function ejectOtherPage(){
  document.getElementById('box1').style.display = "none";
  document.getElementById('box2').style.display="block";
}
function ejectOtherPagreturn(){
  document.getElementById('box2').style.display="none";
  document.getElementById('box1').style.display = "block";
}
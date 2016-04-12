// Query in the current frame
function q(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable){return pair[1];}
  }
  return('err404');
}
// Query in the parent frame
function qp(variablep) {
  var query = window.parent.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variablep){return pair[1];}
  }
  return('err404');
}
// Query in the top-most frame
function qt(variablet) {
  var query = window.top.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variablet){return pair[1];}
  }
  return('err404');
}
// Query in the frame named by 'wname'
function qn(variablen,wname) {
  var query = window.wname.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variablen){return pair[1];}
  }
  return('err404');
}

// Carry query with action
function (thelink,thelocation) {
       window.open(thelink+location.search,'thelocation');
}

// Carry query auto
// var x = document.getElementsByTagName("a"); var i; for (i = 0; i < x.length; i++) {x[i].href = +window.location.search;}
$("a").attr("href", +window.location.search);

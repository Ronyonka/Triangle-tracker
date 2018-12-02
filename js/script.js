function triangleTracker(){
var a = document.getElementById('avalue').value();
var b = document.getElementById('bvalue').value();
var c = document.getElementById('cvalue').value();

var triangle = function(a, b, c){if (a+b>c && b+c>a && c+a>b){
  if(a == b && b ==c){
    alert("Triangle is Equilateral");
  }else if (a == b || b == c || a == c ){
    alert("Triangle is iscoceles");
  }else{
    alert("Triangle is Scalene");
  }
}
  }else {
    alert("This is not a triangle");
  }}

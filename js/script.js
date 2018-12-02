function triangleTracker(){
var a = parseInt(document.getElementById('avalue').value());
var b = parseInt(document.getElementById('bvalue').value());
var c = parseInt(document.getElementById('cvalue').value());

var triangle = [];

triangle.push("a");
triangle.push("b");
triangle.push("c");

var results = document.querySelector("#results");

if (a+b>c && b+c>a && c+a>b){
  if(a == b && b ==c){
    results.innerHTML="Your Triangle is Equilateral";
  }else if (a == b || b == c || a == c ){
    results.innerHTML="Triangle is iscoceles";
  }else{
    results.innerHTML="Triangle is Scalene";
  }
}
  }else {
    results.innerHTML="This is not a triangle";
  }}

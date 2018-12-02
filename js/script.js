var a = parseInt(getElementById('avalue')).value();
var b = parseInt(getElementById('bvalue')).value();
var c = parseInt(getElementById('cvalue')).value();

var triangle = function(a, b, c){if (a+b>c && b+c>a && c+a>b){
    return triangle;
  }else {
    alert("This is not a triangle");
  }}


var checkTriangle = function(triangle){if(a == b && b ==c){
    alert("Triangle is Equilateral");
  }else if (a == b || b == c || a == c ){
    alert("Triangle is iscoceles");
  }else if (a !== b && b !== c && a !== c){
    alert("Triangle is Scalene");
  }}

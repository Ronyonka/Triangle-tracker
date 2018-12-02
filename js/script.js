var a = parseInt(getElementById('avalue')).value;
var b = parseInt(getElementById('bvalue')).value;
var c = parseInt(getElementById('cvalue')).value;

getElementById('submit').onClick = function(){if (a+b>c && b+c>a && c+a>b){
      if(a == b && b ==c){
        alert("Triangle is Equilateral");
      }else if (a == b && b !== c ){
        alert("Triangle is iscoceles");
      }else if (c == b && a !== c ){
        alert("Triangle is iscoceles");
      }else if (a == c && b !== c ){
        alert("Triangle is iscoceles");
      }else if (a !== b && b !== c && a !== c){
        alert("Triangle is Scalene");
      }
    }else {
    alert("This is not a triangle");
  }}

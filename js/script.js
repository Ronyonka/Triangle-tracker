var a = getElementById('avalue').submit();
var b = getElementById('bvalue').submit();
var c = getElementById('cvalue').submit();



if (a+b>c && b+c>a && c+a>b){
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
}

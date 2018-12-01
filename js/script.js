var a = parseInt(prompt("Enter A value"));
var b = parseInt(prompt("Enter B value"));
var c = parseInt(prompt("Enter C value"));



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

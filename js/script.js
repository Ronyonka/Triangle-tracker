function triangleTracker(){
  var a = parseInt(document.getElementById('avalue').value);
  var b = parseInt(document.getElementById('bvalue').value);
  var c = parseInt(document.getElementById('cvalue').value);

  if(a+b>c && b+c>a && c+a>b){
    if(a == b && b == c){
      alert("Your Triangle is Equilateral");
    }else if (a == b || b == c || a == c){
      alert("Your Triangle is Isoceles");
    }else{
      alert("You have discovered a scalene triangle");
    }
  }else{
    alert("This is a bermuda triangle i.e it is none existent");
  }
}

function triangleTracker(){
  var a = parseInt(document.getElementById('avalue').value);
  var b = parseInt(document.getElementById('bvalue').value);
  var c = parseInt(document.getElementById('cvalue').value);

  if(isNaN(a) || isNaN(b) || isNaN(c)){
      alert("Seems like you never got \"Round\" to selecting all the dimensions...Tri-again");
    }else if(a+b>c && b+c>a && c+a>b){
      if(a == b && b == c){
        alert("Your Triangle is Equilateral");
      }else if (a == b || b == c || a == c){
        alert("Your Triangle is Isoceles");
      }else{
        alert("You have discovered a scalene triangle");
      }
    }else{
      alert("Your dimensions do not form a triangle. Tri-again...");
    }
  }

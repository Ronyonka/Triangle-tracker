function triangleTracker() {
  var a = parseInt(document.getElementById('avalue').value);
  var b = parseInt(document.getElementById('bvalue').value);
  var c = parseInt(document.getElementById('cvalue').value);

  var results = document.querySelector("#results");

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    results.innerHTML = "Seems like you never got \"Round\" to selecting all the dimensions...Tri-again";
  } else if (a + b > c && b + c > a && c + a > b) {
    if (a == b && b == c) {
      results.innerHTML = "Your Triangle is Equilateral";
    } else if (a == b || b == c || a == c) {
      results.innerHTML = "Your Triangle is Isoceles";
    } else {
      results.innerHTML = "You have discovered a scalene triangle";
    }
  } else {
    results.innerHTML = "Your dimensions do not form a triangle. Tri-again...";
  }
}

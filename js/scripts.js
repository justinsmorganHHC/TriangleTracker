$(document).ready(function() {
  $("#triangle-sides").submit(function(event) {
    event.preventDefault();

    var sideA = parseInt($("input#side-a").val());
    var sideB = parseInt($("input#side-b").val());
    var sideC = parseInt($("input#side-c").val());

    if (sideA + sideB <= sideC || sideB + sideC <= sideA || sideA + sideC <= sideB) {
      $(".answer").hide();
      $("#not").show();
    } else if (sideA === sideB && sideA === sideC) {
      $(".answer").hide();
      $("#equilateral").show();
    } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
      $(".answer").hide();
      $("#isosceles").show();
    } else if (sideA !== sideB && sideA !== sideC && sideB !== sideC) {
      $(".answer").hide();
      $("#scalene").show();
    }

  });
});

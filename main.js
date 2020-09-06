$(document).ready(function() {
  $("#calculateBMI").click(function(e) {
    e.preventDefault();
    var weight = $("[name='weight']").val();
    var height = $("[name='height']").val();
    if (weight > 0 && height > 0) {
      var finalBmi = (weight / (height * height)) * 10000;
      var result = Math.round(finalBmi * 10) / 10;
      $("#dopeBMI").val(result);
      if (result < 18.5) {
        $('#uw').addClass('visible');
      } else if (result < 24.9) {
        $('#health').addClass('visible');
      } else if (result < 29.9) {
        $('#ow').addClass('visible');
      } else {
        $('#obese').addClass('visible');
      }
    }
  });
});

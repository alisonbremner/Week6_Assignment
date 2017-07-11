$(document).ready(function() {
  var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

  cities.forEach(function(city) {
    var text = "<option>" + city + "</option>";
    $('#city-type').append(text);
  });

  var updatePic = function(event) {
    var city = $(event.target).val().toLowerCase();
    if (city === 'atx') {
      $('body').css('background', 'url(images/austin.jpg)');
    }
    else if (city === 'syd') {
      $('body').css('background', 'url(images/sydney.jpg)');
    }  else {
      $('body').css('background', 'url(images/' + city + '.jpg)');
    }

}

  $('#city-type').change(updatePic);


});

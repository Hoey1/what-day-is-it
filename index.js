// switch backgrounds based on time of day

$(document).ready(function () {
  var d = new Date();
  var n = d.getHours();
  if (n >= 16 || n < 4)
    // If time is after 4PM or before 4AM, apply night theme to ‘body’ // wine
    document.body.className = "night";
  else if (n > 11 && n < 16)
    // If time is between 11AM – 4PM sunset theme to ‘body’ // mimosas
    document.body.className = "brunch";
  // Else use ‘day’ theme // coffee
  else document.body.className = "morning";
});

$(document).ready(function() {
  // Initialize an empty list to store selected amenities
  var selectedAmenities = [];

  // Make a request to the API to get its status
  $.get("http://0.0.0.0:5001/api/v1/status/", function(data) {
    if (data.status === "OK") {
      // Add the "available" class to the API status div
      $('#api_status').addClass('available');
    } else {
      // Remove the "available" class from the API status div
      $('#api_status').removeClass('available');
    }
  });

  // Rest of your code for handling checkbox changes and updating the amenities...
});


$(document).ready(function() {
  // Make a request to the API to get places data
  $.ajax({
    url: "http://0.0.0.0:5001/api/v1/places_search/",
    type: "POST",
    data: JSON.stringify({}), // Sending an empty dictionary in the body
    contentType: "application/json",
    dataType: "json",
    success: function(data) {
      // Loop through the results and create article tags for each Place
      var places = data.places; // Adjust this based on the API response structure
      var placesSection = $('.places');
      places.forEach(function(place) {
        // Create article tags and add Place details here
        var article = $('<article>');
        // Add Place details to the article tag
        // Example: article.append('<h2>' + place.name + '</h2>');
        placesSection.append(article);
      });
    },
    error: function(xhr, status, error) {
      // Handle errors if needed
    }
  });
});


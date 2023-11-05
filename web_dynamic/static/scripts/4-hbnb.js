$(document).ready(function() {
  // Make a request to the API to get places data initially
  updatePlaces();

  // Handle the filter button click event
  $('#filter-button').click(function() {
    // Get the list of checked amenities (you may need to adapt this based on your HTML structure)
    var checkedAmenities = [];
    $('.amenity-checkbox:checked').each(function() {
      checkedAmenities.push($(this).data('id'));
    });

    // Make a POST request to places_search with the list of checked amenities
    $.ajax({
      url: "http://0.0.0.0:5001/api/v1/places_search/",
      type: "POST",
      data: JSON.stringify({ amenities: checkedAmenities }),
      contentType: "application/json",
      dataType: "json",
      success: function(data) {
        // Update the places section with the filtered places
        updatePlaces(data.places);
      },
      error: function(xhr, status, error) {
        // Handle errors if needed
      }
    });
  });

  // Function to update the places section
  function updatePlaces(placesData) {
    var placesSection = $('.places');
    placesSection.empty();
    if (placesData) {
      placesData.forEach(function(place) {
        // Create article tags and add Place details here
        var article = $('<article>');
        // Add Place details to the article tag
        // Example: article.append('<h2>' + place.name + '</h2>');
        placesSection.append(article);
      });
    }
  }
});


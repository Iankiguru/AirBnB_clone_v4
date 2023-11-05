$(document).ready(function() {
  // Initialize variables to store selected States and Cities
  var selectedStates = [];
  var selectedCities = [];

  // Make a request to the API to get places data initially
  updatePlaces();

  // Handle the filter button click event
  $('#filter-button').click(function() {
    // Get the list of checked States and Cities
    selectedStates = getSelectedItems('.state-checkbox');
    selectedCities = getSelectedItems('.city-checkbox');

    // Make a POST request to places_search with the list of selected amenities, cities, and states
    var requestData = {
      amenities: [], // Amend this as needed
      cities: selectedCities,
      states: selectedStates
    };

    $.ajax({
      url: "http://0.0.0.0:5001/api/v1/places_search/",
      type: "POST",
      data: JSON.stringify(requestData),
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

  // Function to get the list of selected items based on a class name
  function getSelectedItems(className) {
    var selectedItems = [];
    $(className + ':checked').each(function() {
      selectedItems.push({ id: $(this).data('id'), name: $(this).data('name') });
    });
    return selectedItems;
  }

  // Function to update the <h4> tag with the list of selected States or Cities
  function updateSelectedLocations() {
    var selectedLocations = selectedStates.concat(selectedCities);
    $('#selected-locations').text('Selected Locations: ' + selectedLocations.map(location => location.name).join(', '));
  }

  // Listen for changes on State and City checkboxes
  $('.state-checkbox, .city-checkbox').change(function() {
    updateSelectedLocations();
  });
});


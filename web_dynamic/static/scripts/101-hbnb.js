$(document).ready(function() {
  // Initialize a variable to track the state of reviews display
  var showReviews = false;

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
      selectedItems.push({ id:



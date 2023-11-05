$(document).ready(function() {
  // Initialize an empty list to store selected amenities
  var selectedAmenities = [];

  // Listen for changes on each checkbox
  $('.amenity-checkbox').change(function() {
    var amenityId = $(this).data('id');
    var amenityName = $(this).data('name');

    if (this.checked) {
      selectedAmenities.push(amenityId);
    } else {
      var index = selectedAmenities.indexOf(amenityId);
      if (index !== -1) {
        selectedAmenities.splice(index, 1);
      }
    }

    // Update the <h4> tag with the list of selected amenities
    $('#selected-amenities').text('Selected Amenities: ' + selectedAmenities.join(', '));
  });
});


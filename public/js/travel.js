// get doc ready for post reqs
$(document).ready(function () {
  var search = $("#search");
  var searchInput = $("#Input");
  var tripSelect = $("#trips");
  $(search).on("submit", "search-form", handleFormSubmit);
  $(document).on("click", ".delete-trip", handleDeleteButton);

  // should probably have to be its own form to update trip and data
  $(document).on("click", ".update-trip", handleUpdateButton);

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!locationInput.val().trim().trim()) {
      return;
    }

    $.ajax({
      url:
        "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0" +
        "/UK/GBP/en-GB/?query=" +
        searchInput,
      dataType: "json",
      success: function (data) {
        console.log(data);
        const travelLocation = data.results[0];
        console.log(travelLocation);
      },
    });
  }

  // functions to handle deleting of saved posts from database and results
  function deleteTrip(id) {
    $.ajax({
      method: "DELETE",
      url: "api/travel/" + id,
    }).then(function () {
      getTrips(tripSelect.val());
    });
  }
  function handleDeleteButton() {
    var currentTrip = $(this).parent().parent().data("trips");
    deleteTrip(currentTrip);
  }
});

// on button click events

// send put requests to put in user choices

// send post requests to the server

// send delete requests to the server

// 3rd Party api call here

// get doc ready for post reqs
$(document).ready(function () {
  var search = $("#search");
  var tripSelect = $("#trips");
  var country = $("#country");
  var locale = $("#origin");
  var destinationPlace = $("destination");
  var outboundPartialDate = $("outbound");
  var inboundPartialDate = $("inbound");

  //Add submit button in hbs - .click instead of submit.
  $("#search").submit(function (e) {
    e.preventDefault();
    console.log("this is working");
  });
  //   $(search).on("submit", ".search-form", handleFormSubmit);
  //   $(document).on("click", ".delete-trip", handleDeleteButton);

  // should probably have to be its own form to update trip and data
  //   $(document).on("click", ".save-trip", handleSaveButton);

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("event");
    var settings = {
      async: true,
      crossDomain: true,
      url:
        "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm",
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "32fc3296c6mshf0fe9b6337eb5a9p1804a9jsnf2f36e2db290",
      },
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }
});

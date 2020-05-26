$(document).ready(function () {

   var flightInfo = {};
   flightInput = [];
    // event handlers for the buttons and search results
    $("#search-form").on("submit", handleFormSubmit);
    $("#delete").on("click", handleDeleteButton);
    $("#get").on("click", handleGetButton);
    $("#save").on("click", handleSaveButton);

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Calling API...");
        var destination = $("#search").val().trim();
        var origin = $("#origin").val().trim();
        var inbound = $("#depart").val().trim();
        var outbound = $("#return").val().trim();
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/" +
                origin + "/USD/en-US/?query=" + destination,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "x-rapidapi-key": "32fc3296c6mshf0fe9b6337eb5a9p1804a9jsnf2f36e2db290"
            }
        }

        $.ajax(settings).done(function (response) {
            // console.log(response);
            console.log(dest)
        }).then(function (data) {
            var country = data.Places[0].CountryId
            // second api call goes here with variables first call
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/" +
                    "US/USD/en-US/" + "SFO-sky/" + country + "/" + inbound + "?inboundpartialdate=" + outbound,
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                    "x-rapidapi-key": "32fc3296c6mshf0fe9b6337eb5a9p1804a9jsnf2f36e2db290"
                }
            }
            $.ajax(settings).done(function (response) {
                console.log(response);
                getFlights(response);
                return response;

            });
          
        });

        // returns the data from the api call
    }

    function handleGetButton(event) {
        console.log("Calling database...");
        // get data from the database, update the api route to handle get
        $.get("/api/travel" + id, function (data) {
            console.log("places", data)
        })
    }

    function handleDeleteButton(event) {
        console.log("Initiating delete...");
        var id = $(this).data("id");
        $.ajax({
            type: "DELETE",
        }).then(function () {
            console.log("Trip has been deleted!");
            location.reload();
        });
    };

    function handleSaveButton() {
        // target all information on the card to place into an object
        var newTrip = {
            price: $("#price").text().trim(),
            direct: $("#direct").text().trim(),
            outbound_carrierId: $("#outbound-carrier").text().trim(),
            outbound_originId: $("#outbound-origin").text().trim(),
            outbound_destinationId: $("#destination").text().trim(),
            outbound_departure: $("#outbound-depart").text().trim(),
            inbound_carrierId: $("#inbound-carrier").text().trim(),
            inbound_originId: $("#carrier-origin").text().trim(),
            inbound_destinationId: $("#inbound-destination").text().trim(),
            inbound_departure: $("#inbound-depart").text().trim(),
            quote_date: $("#qoute-date").text().trim()
        }
        console.log(newTrip);
        $.post("/api/price", newTrip).then(newTrip)
        $.ajax("/api/price/" + id, {
            type: "PUT",
            data: newTrip
        }).then(function () {
            saveCarriers();
            savePlaces();
            console.log("Trip has been saved!")
            location.reload();
        })
    }

    function savePlaces() {
        // target all information on the card to place into an object
        var newPlace = {
            price: $("#price").text().trim(),
            placeId: $("#place-id").text().trim(),
            iata_code: $("#iata-code").text().trim(),
            name: $("#place-name").text().trim(),
            type: $("#type").text().trim(),
            skyscanner_code: $("#skyscanner-code").text().trim(),
            city_name: $("#city-name").text().trim(),
            city_id: $("#city-id").text().trim(),
            country_name: $("#country-name").text().trim(),
        }
        console.log(newPlace)
        $.post("/api/travel", newPlace).then(newPlace)
        $.ajax("/api/travel/" + id, {
            type: "PUT",
            data: newPlace
        }).then(function () {
            console.log("Trip has been saved!")
            location.reload();
        })
    }

    function saveCarriers() {
        // target all information on the card to place into an object
        var newCarrier = {
            carrier_id: $("#carrier-id").text().trim(),
            name: $("#carrier-name").text().trim(),
        }
        console.log(newCarrier)
        $.post("/api/carrier", newCarrier).then(newCarrier)
        $.ajax("/api/carrier/" + id, {
            type: "PUT",
            data: newCarrier
        }).then(function () {
            console.log("Trip has been saved!")
            location.reload();
        })
    }

    function getFlights(response){
        $("#results").html("<h4></h4>").text("Browse Flights for " + origin);

        for (i=0;i<data.length;i++){
            var col = $("<div>").addClass("col s12 m7");
            var card = $("<div>").addClass("card");
            var title = $("<span>").addClass("card-title").text(data.Places[i].CountryName + ", " + data.Places[i].Name);
            var button = $("button").addClass("btn-floating halfway-fab waves-effect waves-light red")
            var content = $("<div>").addClass("card-content");
            var p1 = $("<p>").addClass("card-text").text("City: " + data.Places[i].CityName);
            var p2 = $("<p>").addClass("card-text").text("Carrier: " + data.Carriers[i].Name);
            var p2 = $("<p>").addClass("card-text").text("Price: " + data.Qoutes[i].MinPrice);
            var p2 = $("<p>").addClass("card-text").text("Departure: " + data.Qoutes[i].OutboundLeg.DepartureDate);
            var p2 = $("<p>").addClass("card-text").text("Departure: " + data.Qoutes[i].InboundLeg.DepartureDate);
            // merge together and put on page
            col.append(card.append(body.append(title, button, p1, p2)));

            // append onto the row
            // $("#results .row").append(col);
        }
        console.log("Search Completed")
    }
});

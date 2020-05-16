// get doc ready for post reqs
$(document).ready(function () {
    var search = $("#search");
    var tripSelect = $("#trips");
    var country = $("#country");
    var locale = $("#origin");
    var destinationPlace = $("destination");
    var outboundPartialDate = $("outbound");
    var inboundPartialDate = $("inbound");

    $(search).on("submit","search-form", handleFormSubmit);
    $(document).on("click", ".delete-trip", handleDeleteButton);

    // should probably have to be its own form to update trip and data
    $(document).on("click", ".update-trip", handleUpdateButton);

    function handleFormSubmit(event) {
        event.preventDefault();
        if (!locationInput.val().trim().trim()) {
            return;
        }

        $.ajax({
            url: 'https://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/' +
            country +
            '/' + locale +'/'+
            originPlace +'/' +
            destinationPlace + '/' +
            outboundPartialDate +'/' +
            inboundPartialDate + '?apiKey={apiKey}',
            dataType: 'json',
            success: function (data) {
                console.log(data);
                const travelLocation = data.results[0];
                console.log(travelLocation)
            }
        })
    }


    // function to add all html cards generated onto page


// functions to handle deleting of saved posts from database and results
    function deleteTrip(id){
        $.ajax({
            method:"DELETE",
            url: "api/travel/" + id
        }).then(function(){
            getTrips(tripSelect.val());
        })
        console.log("Trip has been deleted")
    }
    function handleDeleteButton(){
        var currentTrip = $(this)
        .parent()
        .parent()
        .data("trips");
        deleteTrip(currentTrip)
    }


    // var url = window.location.search;
    //  var tripId;
    //  if (url.indexOf("?trip_id=") !== -1){
    //      tripId = url.split("=")[1];
    //      getTrips(tripId);
    //  }else{
    //      getTrips()
    //  }

    //  function getTrips(trips){
    //      tripId = trip || "";
    //      if (tripId){
    //          tripId = "/?trip_id=" + tripId;
    //      }
    //      $.get("/api/travel" + tripId, function(data){
    //          console.log("Trips", data);
    //          trips = data;
    //          if (!trips || trips.length){
    //              displayNone(trip);
    //          }else{
    //              generate();
    //          }
    //      })
    //  }


})



// on button click events 


// send put requests to put in user choices 

// send post requests to the server

// send delete requests to the server 

// 3rd Party api call here
$(document).ready(function () {
    // $(".nav-wrapper").hide();
$.get("/api/travel", function (data) {
    // console.log(data)
   for (let i = 0; i < data.length; i++) {
    const newPara = $("<p>");
    const newPara2 = $("<p>");
    const newPara3 = $("<p>");
    const newPara4 = $("<p>");
    const newPara5 = $("<p>");
    const newPara6 = $("<p>");
    const newPara7 = $("<p>");
    const newPara8 = $("<p>");
    const newPara9 = $("<p>");
    newPara.text("Price: " + data[i].price);
    newPara2.text("Outbound Carrier ID: " + data[i].outbound_carrierId);
    newPara3.text("Outbound Origin ID: " + data[i].outbound_originId);
    newPara4.text("Outbound Destination ID: " + data[i].outbound_destinationId);
    newPara5.text("Outbound Departure Date: " + data[i].outbound_departure);
    newPara6.text("Inbound Carrier ID: " + data[i].inbound_carrierId);
    newPara7.text("Inbound Origin ID: " + data[i].inbound_originId);
    newPara8.text("Inbound Destination ID: " + data[i].inbound_destinationId);
    newPara9.text("Inbound Departure Date: " + data[i].inbound_departure);
    $("#quote").append(newPara, newPara2, newPara3, newPara4, newPara5, newPara6, newPara7, newPara8, newPara9);

   }
    getPlaces();
    getCarrier();
})


const getPlaces = () => {
    $.get("/api/place", function(data) {
        // console.log(data);
        for (let i = 0; i < data.length; i++) {
            const newPara = $("<p>");
            const newPara2 = $("<p>");
            const newPara3 = $("<p>");
            const newPara4 = $("<p>");
            const newPara5 = $("<p>");
            const newPara6 = $("<p>");
            const newPara7 = $("<p>");
            const newPara8 = $("<p>");
            newPara.text("Place ID: " + data[i].placeId);
            newPara2.text("Iata Code: " + data[i].iata_code);
            newPara3.text("Name: " + data[i].name);
            newPara4.text("Type: " + data[i].type);
            newPara5.text("Skyscanner Code: " + data[i].skyscanner_code);
            newPara6.text("City Name: " + data[i].city_name);
            newPara7.text("City ID: " + data[i].city_id);
            newPara8.text("Country Name: " + data[i].country_name);

            $("#places").append(newPara, newPara2, newPara3, newPara4, newPara5, newPara6, newPara7, newPara8);
        }
    })
}

const getCarrier = () => {
    $.get("/api/carrier", function(data){
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            const newPara = $("<p>");
            const newPara2 = $("<p>");
            newPara.text("Carrier ID: " + data[i].carrier_id);
            newPara2.text("Name: " + data[i].name);
            $("#carrier").append(newPara, newPara2);
        }
    })
}







});
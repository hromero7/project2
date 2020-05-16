USE flights_db

INSERT INTO quotes (
    price, 
    direct, 
    outbound_carrierId, 
    outbound_originId,
    outbound_destinationId,
    outbound_departure,
    inbound_carrierId,
    inbound_originId,
    inbound_destinationId,
    inbound_departure,
    quote_date)

VALUES (
    336,
    true,
    1864,
    81727,
    60987,
    "2018-04-01T00:00:00",
    851,
    60987,
    81727,
    "2018-05-01T00:00:00",
    "2018-03-08T04:54:00"
);

INSERT INTO places (
    placeId,
    iata_code,
    name,
    type,
    skyscanner_code,
    city_name,
    city_id,
    country_name
)

VALUES (
    60987,
    "JFK",
    "New York John F. Kennedy",
    "Station",
    "JFK",
    "New York",
    "NYCA",
    "United States"
),
(
    81727,
    "SFO",
    "San Francisco International",
    "Station",
    "SFO",
    "San Francisco",
    "SFOA",
    "United States"
);

INSERT INTO carriers (
    carrier_id,
    name
)

VALUES(
    851,
    "Alaska Airlines"
),
(
    870,
    "JetBlue"
);
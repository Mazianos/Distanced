const twentyfive = [{
    lat: 49.25143071416536,
    lng: -123.00442950017579
}, {
    lat: 49.24775524508593,
    lng: -123.004316109327
}, {
    lat: 49.24753897779521,
    lng: -123.00694439444209
}, {
    lat: 49.249359197915,
    lng: -123.01044509348392
}, {
    lat: 49.248794384699494,
    lng: -123.01587707728525
}, {
    lat: 49.24884440369185,
    lng: -123.02357164058786
}, {
    lat: 49.250635741813745,
    lng: -123.02354403256344
}, {
    lat: 49.25070185449106,
    lng: -123.05664781053177
}, {
    lat: 49.248802387765934,
    lng: -123.05658707286544
}, {
    lat: 49.24881320087616,
    lng: -123.05590239356903
}, {
    lat: 49.24840230102002,
    lng: -123.05552140266434
}]

const expoBDF = [{
    lat: 49.24830137772139,
    lng: -123.05585822071035
}, {
    lat: 49.25213631793139,
    lng: -123.0649357433013
}, {
    lat: 49.25494385313379,
    lng: -123.06851926652983
}, {
    lat: 49.25631692836697,
    lng: -123.06911007852509
}, {
    lat: 49.26343036015224,
    lng: -123.06926468354321
}, {
    lat: 49.266741444739715,
    lng: -123.07881123289138
}, {
    lat: 49.26918786230828,
    lng: -123.08106957034308
}, {
    lat: 49.26971748313777,
    lng: -123.08261562045908
}, {
    lat: 49.270376799068686,
    lng: -123.08566906934965
}, {
    lat: 49.27235469400562,
    lng: -123.097308617846
}, {
    lat: 49.27289869126445,
    lng: -123.09889884072797
}, {
    lat: 49.273485913376994,
    lng: -123.10206824339859
}, {
    lat: 49.276569615344826,
    lng: -123.10266457706936
}, {
    lat: 49.277297283240216,
    lng: -123.10337134279469
}, {
    lat: 49.277952895624104,
    lng: -123.10680026093038
}, {
    lat: 49.27953425448944,
    lng: -123.10954449990902
}, {
    lat: 49.28030772485691,
    lng: -123.11120344897326
}, {
    lat: 49.28335755887346,
    lng: -123.1160100060759
}]

document.getElementById("fastest-route").onclick = function () {
    fastest()
};

// Settings for the polyline for the map.
const twentyfivePath = new google.maps.Polyline({
    path: twentyfive,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 0.5,
    strokeWeight: 4,
});

// Settings for the polyline for the map.
const expoBDFPath = new google.maps.Polyline({
    path: expoBDF,
    geodesic: true,
    strokeColor: "#CA573E",
    strokeOpacity: 0.5,
    strokeWeight: 4,
});

function fastest() {
    routePath.setMap(map);
    routePathTwo.setMap(map);
}

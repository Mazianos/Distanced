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

const oneThirty = [{
    lat: 49.24798571661244,
    lng: -123.00439946999376
}, {
    lat: 49.24671328913124,
    lng: -123.00347815680945
}, {
    lat: 49.23158279882996,
    lng: -123.00342422034215
}, {
    lat: 49.22768977676348,
    lng: -123.00763260565586
}, {
    lat: 49.226036680974765,
    lng: -123.00414537448015
}]

const expoBDA = [{
    lat: 49.22587768157755,
    lng: -123.00397709946816
}, {
    lat: 49.233114734798754,
    lng: -123.0199748612935
}, {
    lat: 49.28335755887346,
    lng: -123.1160100060759
}]

const seven = [{
    lat: 49.248410307837375,
    lng: -123.05551635113628
}, {
    lat: 49.24881122997817,
    lng: -123.05540796674029
}, {
    lat: 49.24880729938478,
    lng: -123.05656707767488
}, {
    lat: 49.2847837610203,
    lng: -123.05659627870952
}, {
    lat: 49.284810183517415,
    lng: -123.06550775075041
}, {
    lat: 49.28324554692222,
    lng: -123.07407644987993
}, {
    lat: 49.2825154353683,
    lng: -123.08210198487359
}, {
    lat: 49.28295142479204,
    lng: -123.08567670054812
}, {
    lat: 49.283202447264664,
    lng: -123.09957049562294
}, {
    lat: 49.28040149254489,
    lng: -123.09969201579983
}, {
    lat: 49.28050058563368,
    lng: -123.10435028530631
}, {
    lat: 49.281564172295575,
    lng: -123.10999084208534
}, {
    lat: 49.2846292875568,
    lng: -123.11487189844938
}, {
    lat: 49.28342342303933,
    lng: -123.11659868293755
}]

// Settings for the polyline for the map.
const sevenPath = new google.maps.Polyline({
    path: seven,
    geodesic: true,
    strokeColor: "#AC00E6",
    strokeOpacity: 0.5,
    strokeWeight: 4,
});

// Settings for the polyline for the map.
const oneThirtyPath = new google.maps.Polyline({
    path: oneThirty,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 0.5,
    strokeWeight: 4,
});

// Settings for the polyline for the map.
const expoBDAPath = new google.maps.Polyline({
    path: expoBDA,
    geodesic: true,
    strokeColor: "#CA573E",
    strokeOpacity: 0.5,
    strokeWeight: 4,
});

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

function BDf1230() {
    twentyfivePath.setMap(map);
    expoBDFPath.setMap(map);
}

function BDa1230() {
    oneThirtyPath.setMap(map);
    expoBDAPath.setMap(map);
    expoBDFPath.setMap(map);
}

function BDs1230() {
    twentyfivePath.setMap(map);
    sevenPath.setMap(map);
}

document.getElementById("fastest-route").onclick = function () {
    BDf1230()
};

document.getElementById("average-route").onclick = function () {
    BDa1230()
};

document.getElementById("slowest-route").onclick = function () {
    BDs1230()
};

document.getElementById('btn1').onclick = function() {	
    var val1 = $('[name=origin]').val();	   
    var val2 = $('[name=destination]').val();	  
    var val3 = $('[name=time]').val();	
    function save() {	
        localStorage.setItem('current', val1);	
        localStorage.setItem('destination', val2);	
        localStorage.setItem('time', val3);	
    }	
    save()	
    console.log(localStorage);	
}


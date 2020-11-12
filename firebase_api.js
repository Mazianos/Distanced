//---------------------------------------------------------------------
// Your web app's Firebase configuration;
// Specifies which firebase project your application is connected with.
//---------------------------------------------------------------------

var firebaseConfig = {

    // Your API stuff goes here;  get it from firebase console
    apiKey: "AIzaSyDg-z0xrwHj90EIzn2EmSKyGyC4gh4dzdc",
    authDomain: "distanced-86fa9.firebaseapp.com",
    databaseURL: "https://distanced-86fa9.firebaseio.com",
    projectId: "distanced-86fa9",
    storageBucket: "distanced-86fa9.appspot.com",
    messagingSenderId: "167176184310",
    appId: "1:167176184310:web:3ab296203c5e2c9f1467d7"
  
  };

  //added to avoid 
  //Uncaught FirebaseError: Firebase: Firebase App named '[DEFAULT]' already exists (app/duplicate-app)
  //if(firebase.apps.length === 0){
  //  firebase.initializeApp(firebaseConfig);
  //}
  // Initialize Firebase  
  firebase.initializeApp(firebaseConfig);
  // Create the Firestore database object
  // Henceforce, any reference to the database can be made with "db"
  const db = firebase.firestore();
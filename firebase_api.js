//---------------------------------------------------------------------
// Your web app's Firebase configuration;
// Specifies which firebase project your application is connected with.
//---------------------------------------------------------------------

var firebaseConfig = {

    // Your API stuff goes here;  get it from firebase console
      apiKey: "AIzaSyDfFeB9hSHwhdaXyblIrTjlQtMyrCNgpQc",
      authDomain: "distanced-462c4.firebaseapp.com",
      databaseURL: "https://distanced-462c4.firebaseio.com",
      projectId: "distanced-462c4",
      storageBucket: "distanced-462c4.appspot.com",
      messagingSenderId: "88964466890",
      appId: "1:88964466890:web:341ce1a365c720eb3e0c33",
      measurementId: "G-4VJN1CPNNN"
  
  };

  //added to avoid 
  //Uncaught FirebaseError: Firebase: Firebase App named '[DEFAULT]' already exists (app/duplicate-app)
  if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
  }
  // Initialize Firebase  
  //firebase.initializeApp(firebaseConfig);
  // Create the Firestore database object
  // Henceforce, any reference to the database can be made with "db"
  const db = firebase.firestore();

//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD0JRZkrFNAkUJQEcT9rWETvKmJ0ef60Qc",
      authDomain: "kwitter-ea763.firebaseapp.com",
      databaseURL: "https://kwitter-ea763-default-rtdb.firebaseio.com",
      projectId: "kwitter-ea763",
      storageBucket: "kwitter-ea763.appspot.com",
      messagingSenderId: "399697872399",
      appId: "1:399697872399:web:fbb143e9bc9b889dec457a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

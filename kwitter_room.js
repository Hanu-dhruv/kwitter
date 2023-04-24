
var firebaseConfig = {
      apiKey: "AIzaSyDiwR1aWBQUH1g05VV2sXriw6F-T8P5SBI",
      authDomain: "kwitter-b6c69.firebaseapp.com",
      databaseURL: "https://kwitter-b6c69-default-rtdb.firebaseio.com",
      projectId: "kwitter-b6c69",
      storageBucket: "kwitter-b6c69.appspot.com",
      messagingSenderId: "261394054035",
      appId: "1:261394054035:web:7509ee8b946a5f6dec0666",
      
    };
    
    
    firebase.initializeApp(config);
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

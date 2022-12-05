var firebaseConfig = {
  apiKey: "AIzaSyBdnXXhoLwmTA8IGcmrcO5SqnQLSz7i7WE",
  authDomain: "letchat-web-app.firebaseapp.com",
  databaseURL: "https://letchat-web-app-default-rtdb.firebaseio.com",
  projectId: "letchat-web-app",
  storageBucket: "letchat-web-app.appspot.com",
  messagingSenderId: "57570877349",
  appId: "1:57570877349:web:0c56272f39e82a731a924c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"


}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class ='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      
      });});}
getData();

function redirectToRoomName(name)
{
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"

}

function logout ()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
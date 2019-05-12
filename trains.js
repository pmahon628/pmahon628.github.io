
// append data to HTML
// append data to firebase
// figure out moments for time calculation

$(document).ready(function () {
      // new rows added when .on("click") runs clicking the submit button
      var config = {
        apiKey: "AIzaSyDFb0ueKwUlZbn7GE7O82bA7ZVauGocOqU",
        authDomain: "project- test - d9900.firebaseapp.com",
        databaseURL: "https://project-test-d9900.firebaseio.com",
         storageBucket: "project - test - d9900.appspot.com",
      };
      
      // Initialize Firebase
      firebase.initializeApp(config);

      var database = firebase.database();
      
      //button for new trains
      $("#submit-button").on("click" (function(event) {
        event.preventDefault();
        
      var  trainName = $("#train-name-input").val().trim();
       var trainDestination = $("#train-destination-input").val().trim();
       var frequency = $("#frequency-input").val().trim();
       var nextArrivalTime = $("#next-arrival-time-input").val().trim();
    
      
       var newTrain = {
           name: trainName,
           destination: trainDestination,
           frequency: trainFrequency,
           };
      
      database.ref().push(newTrain);
      
      console.log(newTrain.name);
      console.log(newTrain.destination);
      console.log(newTrain.frequency);
    
      
      database.ref().on("child_added", function (childSnapshot) {
   
        var trainName  = childSnapshot.val().name;
        var trainDestination = childSnapshot.val().destination;
        var nextArrivalTime = childSnapshot.val().frequency;

        console.log(trainName);
        console.log(trainDestination);
        console.log(nextArrivalTime);
      
      
      function calcMinutesAway() {
        convertedDate = moment(startDate, randomFormat);
        // console.log(convertedDate.toNow());
        console.log(convertedDate.diff(moment(startDate), "minutes"))
      };
      
      function calcMinutesAway() {
        console.log(convertedDate.toNow());
        console.log(convertedDate.diff(moment(), "minutes"))
      };

        });       
      
        
        var trElement = $("<tr>");
        trElement.append($("<td>").text(sv.trainName));
        trElement.append($("<td>").text(sv.trainDestination));
        trElement.append($("<td>").text(sv.frequency));
        trElement.append($("<td>").text(nextArrivalTime));
        
        
         // Handle the errors
      }, 
      function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
      };
    });
  });







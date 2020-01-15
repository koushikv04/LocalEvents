

//function to add local events
function addLocalEvent()
{
  var eventName = document.forms["localEventForm"]["eventName"].value;
  var eventLocation = document.forms["localEventForm"]["eventLocation"].value;
  var eventStartDate = document.forms["localEventForm"]["eventStartDate"].value;
  alert(eventStartDate);
  var eventEndDate = document.forms["localEventForm"]["eventEndDate"].value;
  var interests = document.forms["localEventForm"]["interests"].value;
  var region = document.forms["localEventForm"]["regions"].value;
  var postObject = {
  "events": [
       {
         "name":`${eventName}`,
         "location":`${eventLocation}`,
         "start": "2019-12-16T00:00:00.000+02:00",
         "end": "2019-12-16T00:00:00.000+02:00",
         "source_type" : "local",
         "interest_id" : [`${interests}`],
         "regions" : [`${region}`]
       }
     ]
}
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.status==200)
    {
      alert("sent successfully");
    }

  };
  xhttp.open("POST","http://localhost:5050/events",ttue);
  xhttp.send(postObject);


}

//Type your code here

function requestToVolunteerSetup() {
  searchResultProfile.volunteerRequestContainer.isVisible = false;
  searchResultProfile.requestToVolunteerModal.isVisible = false;
  searchResultProfile.requestAVolunteerModal.isVisible = false;
  
  if (loggedInUserObject.user === "volunteer") {
    searchResultProfile.businessProfileContainer.isVisible = true;
    searchResultProfile.volunteerProfileContainer.isVisible = false;
    searchResultProfile.requestToVolunteerModal.isVisible = true;
  	searchResultProfile.show();
  } else if (loggedInUserObject.user === "indigenousBusiness") {
    searchResultProfile.volunteerProfileContainer.isVisible = true;
    searchResultProfile.businessProfileContainer.isVisible = false;
    searchResultProfile.requestAVolunteerModal.isVisible = true;
    searchResultProfile.show();
  }
}

function openSendVolunteerRequestModal11() {
 // alert("1");
  searchResultProfile.volunteerRequestContainer.isVisible=true;
  searchResultProfile.volunteerRequestContainer.requestToVolunteerModal.isVisible=true;
  searchResultProfile.businessProfileContainer.isVisible=false;
  searchResultProfile.volunteerRequestContainer.requestToVolunteerModal.requestToVolunteerBody.requestAvailableDays.text= kony.store.getItem("schedule");
  searchResultProfile.volunteerRequestContainer.requestToVolunteerModal.requestToVolunteerBody.requestAvailableTime.text= kony.store.getItem("fromTimeFull")+" to "+kony.store.getItem("toTimeFull");
  
  
  
}
function closeSendVolunteerRequestModal() {
  searchResultProfile.volunteerRequestContainer.requestToVolunteerModal.isVisible=false;
}

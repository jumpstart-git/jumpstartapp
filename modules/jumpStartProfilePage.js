//Type your code here
function navigateToMyProfile() {
  myProfile.volunteerRequestContainer.isVisible = false;
  
  if (loggedInUserObject.user === "volunteer") {
    myProfile.businessProfileContainer.isVisible = false;
    myProfile.myProfileContainer.isVisible = true;
    myProfile.requestAVolunteer.isVisible = false;
  } else if (loggedInUserObject.user === "indigenousBusiness") {
    myProfile.myProfileContainer.isVisible = false;
    myProfile.businessProfileContainer.isVisible = true;
    myProfile.requestToVolunteerButton.isVisible = false;
  }
  myProfile.show();
  hideSideBar();
}


function requestToVolunteerSetup() {
  myProfile.volunteerRequestContainer.isVisible = false;
  
  if (loggedInUserObject.user === "volunteer") {
    myProfile.businessProfileContainer.isVisible = true;
    myProfile.myProfileContainer.isVisible = false;
    myProfile.requestToVolunteerButton.isVisible = true;
  	myProfile.show();
  } else if (loggedInUserObject.user === "indigenousBusiness") {
    myProfile.myProfileContainer.isVisible = true;
    myProfile.businessProfileContainer.isVisible = false;
    myProfile.requestAVolunteer.isVisible = true;
    myProfile.show();
  }
}

function openSendVolunteerRequestModal() {
  // alert("mamata");
  searchResultProfile.businessProfileContainer.isVisible=false;
 // searchResultProfile.volunteerRequestContainer.requestToVolunteerModal.isVisible=true;
   searchResultProfile.volunteerRequestContainer.isVisible=true;
   searchResultProfile.volunteerRequestContainer.requestAVolunteerModal.isVisible=true;
 
}
function closeSendVolunteerRequestModal() {
   searchResultProfile.volunteerRequestContainer.requestToVolunteerModal.isVisible=false;
}

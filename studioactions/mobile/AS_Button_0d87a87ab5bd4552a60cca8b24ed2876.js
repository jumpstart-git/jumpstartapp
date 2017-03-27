function AS_Button_0d87a87ab5bd4552a60cca8b24ed2876(eventobject) {
    var msg = searchResultProfile.volunteerRequestContainer.requestToVolunteerModal.requestToVolunteerBody.requestRoleInput.text;
    //alert(msg);
    if (msg == "null" || msg == null || msg == "") {
        alert("Please enter a message");
    } else {
        requestVolunteerByBusiness1();
    }
    // searchResultProfile.requestToVolunteerModal.isVisible=false;
    // searchPage.show(); 
}
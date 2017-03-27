function AS_Button_084a6e37b3e34b0c848a45390f3b841a(eventobject) {
    if (kony.store.getItem("isBusOrVol") == "business") {
        //alert("he is business");
        var busMsg = searchResultProfile.volunteerRequestContainer.requestAVolunteerModal.requestAVolunteerBody.requestAVolunteerMessageInput.text;
        if (busMsg == "null" || busMsg == null || busMsg == "") {
            alert("Please enter a message");
        } else {
            requestVolunteer();
        }
    }
    //   }else
    //     {
    //    //   alert("he is volunteer");
    //       requestVolunteerByBusiness1();
    //     }
}
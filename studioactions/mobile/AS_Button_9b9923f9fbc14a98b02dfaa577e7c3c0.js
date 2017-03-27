function AS_Button_9b9923f9fbc14a98b02dfaa577e7c3c0(eventobject) {
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
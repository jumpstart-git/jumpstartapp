function AS_Button_aa3e3d85d1ad4363aa2228b03b71875f(eventobject) {
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
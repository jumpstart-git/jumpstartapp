function AS_Button_9362f9f5ced040ce87d2c51725413107(eventobject) {
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
function AS_Button_7427b749460c4190b7d37fc9de5e757e(eventobject) {
    //generateReportVolunteerService();
    var emailID = ReportingPage.ReportingData.ReportingdataFlex.ReceipientsTxtArea.text;
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //var array=emailID.split(",");
    //alert(emailID);
    if (emailID === null || emailID === "" || emailID === "null") {
        alert("Please enter email Id");
    } else {
        var sendRequest = true;
        var array = emailID.split(",");
        for (i = 0; i < array.length; i++) {
            var email = array[i];
            email = email.trim();
            if (!emailFormat.test(email)) {
                alert("Please enter valid email Ids");
                sendRequest = false;
            }
        }
        if (sendRequest) {
            //return false;
            if ((kony.store.getItem("isBusOrVol") == "volunteer") && (kony.store.getItem("adminVal") == "v")) {
                generateReportVolunteerService();
            } else if ((kony.store.getItem("isBusOrVol") == "business") && (kony.store.getItem("adminVal") == "i")) {
                validateReportIndBusCode();
            } else {
                validateReportSupplyNationBusCode();
            }
            //alert("Inside valid email");
        }
    }
    //start merin
    //end merin
}
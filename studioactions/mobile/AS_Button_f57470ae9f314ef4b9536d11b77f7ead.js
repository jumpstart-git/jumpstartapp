function AS_Button_f57470ae9f314ef4b9536d11b77f7ead(eventobject) {
    var text = mainPage.sendRecommendation.sendRecommendationModalBody.sendRecommendationTextArea.text;
    if (text == "null" || text == null || text == "") {
        //alert("Input your review");
        //D018: Commented out simple alert. Added kony ui error alert
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_ERROR,
            //[D005] [Alerts] "Ensure all Alerts are categorized and updated - whether its:  - Action Required - Warning - Confirmation"
            "alertTitle": "Action Required",
            //End of D005
            "yesLabel": "OK",
            "noLabel": "No",
            "message": "Please input your recommendation or click cancel to return to previous screen",
            "alertHandler": null
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
    } else {
        volSendReview();
        mainPage.sendRecommendation.isVisible = false;
    }
    //mainPage.sendRecommendation.sendRecommendationModalBody.sendRecommendationTextArea.text=" ";
}
function AS_Button_f57470ae9f314ef4b9536d11b77f7ead(eventobject) {
    var text = mainPage.sendRecommendation.sendRecommendationModalBody.sendRecommendationTextArea.text;
    if (text == "null" || text == null || text == "") {
        alert("Input your review");
    } else {
        volSendReview();
        mainPage.sendRecommendation.isVisible = false;
    }
    //mainPage.sendRecommendation.sendRecommendationModalBody.sendRecommendationTextArea.text=" ";
}
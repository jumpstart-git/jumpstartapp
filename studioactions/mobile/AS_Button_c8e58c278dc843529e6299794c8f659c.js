function AS_Button_c8e58c278dc843529e6299794c8f659c(eventobject) {
    if (searchPage.searchTxtbox.text.length == "0.0") {
        alert("Please enter some text ");
    } else {
        searchPage.segPredictive.removeAll();
        if (gblIsVol == true) {
            searchData21();
        } else if (gblIsOpp == true) {
            searchDataofOpportunity();
        } else {
            searchDataBusiness22(gblResponseBusinessSearch);
        }
    }
}
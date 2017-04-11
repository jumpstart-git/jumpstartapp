//Type your code here
function openDialog() {
    var returnStatus1 = kony.phone.openMediaGallery(onselectioncallback, {
        mimetype: "image/*"
    });
}

function onselectioncallback(rawbytes) {
    if (rawbytes == null) {
        alert("Nothing selected");
        return;
    }
    var base64Val = kony.convertToBase64(rawbytes);
    kony.print("The base 64 value is==  " + base64Val);
    registrationPage.registrationPageHeader.regHeaderSubHeader.regHeaderPic.base64 = base64Val;
    kony.store.setItem("imageVal", base64Val);
    kony.store.setItem("imageFileNameVal", "abc.jpg");
}

function openDialogForBusiness() {
    var returnStatus2 = kony.phone.openMediaGallery(onselectioncallback1, {
        mimetype: "image/*"
    });
}

function onselectioncallback1(rawbytes1) {
    if (rawbytes1 == null) {
        alert("Nothing selected");
        return;
    }
    var base64Val1 = kony.convertToBase64(rawbytes1);
    kony.print("The base 64 value is==  " + base64Val1);
    BusinessProfile.businessProfileDetailsContainer.businessProfileHeaderContainer.imgContainer.imgBusinessLogo.base64 = base64Val1;
    kony.store.setItem("imageVal1", base64Val1);
    kony.store.setItem("imgFileNameVal1", "test.jpg");
    // mainPage.destroy();
    businessUpdateImage();
}
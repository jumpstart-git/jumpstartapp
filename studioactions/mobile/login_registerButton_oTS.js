function login_registerButton_oTS(eventobject, x, y) {
    return AS_RichText_58183f113bfb4950a774c5437a2f1324(eventobject, x, y);
}

function AS_RichText_58183f113bfb4950a774c5437a2f1324(eventobject, x, y) {
    kony.store.removeItem("imageVal");
    kony.store.removeItem("imageFileNameVal");
    registrationPage.show();
}
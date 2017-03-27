function login_registerButton_onTouchStart(eventobject, x, y) {
    return AS_Label_2e641c70f5f84f80bb2d8fe88102e950(eventobject, x, y);
}

function AS_Label_2e641c70f5f84f80bb2d8fe88102e950(eventobject, x, y) {
    kony.store.removeItem("imageVal");
    kony.store.removeItem("imageFileNameVal");
    registrationPage.show();
}